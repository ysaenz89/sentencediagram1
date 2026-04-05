class SentenceDiagrammingGame {
    constructor() {
        this.sentences = this.initializeSentences();
        this.currentSentence = null;
        this.currentIndex = 0;
        this.score = 0;
        this.level = 1;
        this.streak = 0;
        this.totalAttempts = 0;
        this.correctAttempts = 0;
        this.difficulty = 1;
        this.placedWords = [];
        this.draggedElement = null;
        
        this.initializeElements();
        this.attachEventListeners();
        this.loadNewSentence();
    }

    initializeSentences() {
        // Import professional sentences database
        return professionalSentences;
    }

    initializeElements() {
        this.sentenceDisplay = document.getElementById('sentence-display');
        this.wordBank = document.getElementById('word-bank');
        this.diagramArea = document.getElementById('diagram-area');
        this.dropZones = {
            subject: document.getElementById('subject-zone'),
            verb: document.getElementById('verb-zone'),
            object: document.getElementById('object-zone'),
            adjective: document.getElementById('adjective-zone'),
            adverb: document.getElementById('adverb-zone'),
            preposition: document.getElementById('preposition-zone'),
            conjunction: document.getElementById('conjunction-zone'),
            article: document.getElementById('article-zone'),
            pronoun: document.getElementById('pronoun-zone'),
            noun: document.getElementById('noun-zone'),
            subordinating_conjunction: document.getElementById('subordinating-conjunction-zone'),
            coordinating_conjunction: document.getElementById('coordinating-conjunction-zone'),
            transition: document.getElementById('transition-zone'),
            infinitive: document.getElementById('infinitive-zone'),
            interjection: document.getElementById('interjection-zone')
        };
        this.feedbackElement = document.getElementById('feedback');
        this.scoreElement = document.getElementById('score');
        this.levelElement = document.getElementById('level');
        this.streakElement = document.getElementById('streak');
        this.hintButton = document.getElementById('hint-button');
        this.hintModal = document.getElementById('hint-modal');
        this.closeHintButton = document.getElementById('close-hint');
        this.newSentenceButton = document.getElementById('new-sentence-button');
        this.resetButton = document.getElementById('reset-button');
        this.shareButton = document.getElementById('share-button');
        this.shareMessage = document.getElementById('share-message');
    }

    attachEventListeners() {
        this.newSentenceButton.addEventListener('click', () => this.loadNewSentence());
        this.resetButton.addEventListener('click', () => this.resetDiagram());
        this.hintButton.addEventListener('click', () => this.showHint());
        this.closeHintButton.addEventListener('click', () => this.hideHint());
        this.shareButton.addEventListener('click', () => this.shareGame());

        // Add drag and drop event listeners
        this.wordBank.addEventListener('dragstart', (e) => this.handleDragStart(e));
        this.diagramArea.addEventListener('dragover', (e) => this.handleDragOver(e));
        this.diagramArea.addEventListener('drop', (e) => this.handleDrop(e));

        // Add click to select functionality
        this.wordBank.addEventListener('click', (e) => this.handleWordClick(e));
        this.diagramArea.addEventListener('click', (e) => this.handleDiagramClick(e));
    }

    loadNewSentence() {
        const availableSentences = this.sentences[this.difficulty];
        
        if (availableSentences.length === 0) {
            this.levelUp();
            return;
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * availableSentences.length);
        } while (randomIndex === this.currentIndex && availableSentences.length > 1);

        this.currentIndex = randomIndex;
        this.currentSentence = availableSentences[randomIndex];
        this.displaySentence();
        this.resetDiagram();
        this.updateStats();
    }

    displaySentence() {
        if (!this.currentSentence) return;
        
        this.sentenceDisplay.innerHTML = '';
        const words = this.currentSentence.text.split(' ');
        
        words.forEach((word, index) => {
            const wordElement = document.createElement('div');
            wordElement.className = 'word-item';
            wordElement.textContent = word;
            wordElement.draggable = true;
            wordElement.dataset.word = word;
            
            // Add part of speech tag if available
            if (this.currentSentence.partsOfSpeech && this.currentSentence.partsOfSpeech[word]) {
                const posTag = document.createElement('span');
                posTag.className = `word-pos-tag ${this.currentSentence.partsOfSpeech[word]}`;
                posTag.textContent = this.getPosAbbreviation(this.currentSentence.partsOfSpeech[word]);
                wordElement.appendChild(posTag);
            }
            
            this.sentenceDisplay.appendChild(wordElement);
        });
    }

    getPosAbbreviation(pos) {
        const abbreviations = {
            'subject': 'SUBJ',
            'verb': 'VERB',
            'object': 'OBJ',
            'adjective': 'ADJ',
            'adverb': 'ADV',
            'preposition': 'PREP',
            'conjunction': 'CONJ',
            'article': 'ART',
            'pronoun': 'PRO',
            'noun': 'NOUN',
            'subordinating_conjunction': 'SUBCONJ',
            'coordinating_conjunction': 'COORD',
            'transition': 'TRANS',
            'infinitive': 'INF',
            'interjection': 'INTJ',
            'participle': 'PART'
        };
        return abbreviations[pos] || pos.toUpperCase();
    }

    handleDragStart(e) {
        this.draggedElement = e.target;
        e.target.classList.add('dragging');
        e.data.effectAllowed = 'move';
    }

    handleDragOver(e) {
        e.preventDefault();
        e.data.dropEffect = 'move';
    }

    handleDrop(e) {
        e.preventDefault();
        
        if (!this.draggedElement) return;
        
        const dropZone = e.target.closest('.drop-zone');
        if (!dropZone) return;
        
        const word = this.draggedElement.dataset.word;
        dropZone.appendChild(this.draggedElement);
        
        this.draggedElement.classList.remove('dragging');
        this.draggedElement = null;
        
        this.checkWin();
    }

    handleWordClick(e) {
        if (e.target.classList.contains('word-item')) {
            e.target.classList.toggle('selected');
        }
    }

    handleDiagramClick(e) {
        if (e.target.classList.contains('drop-zone') && e.target.children.length === 0) {
            const selectedWords = document.querySelectorAll('.word-item.selected');
            selectedWords.forEach(word => {
                if (word.parentNode === this.wordBank) {
                    e.target.appendChild(word);
                    word.classList.remove('selected');
                }
            });
        }
    }

    resetDiagram() {
        // Clear all drop zones
        Object.values(this.dropZones).forEach(zone => {
            zone.innerHTML = '';
        });
        
        // Reset word bank
        const wordItems = this.wordBank.querySelectorAll('.word-item');
        wordItems.forEach(item => {
            item.classList.remove('selected');
        });
        
        this.placedWords = [];
    }

    checkWin() {
        const allZonesFilled = Object.values(this.dropZones).every(zone => zone.children.length > 0);
        
        if (allZonesFilled) {
            this.showFeedback('Perfect! You correctly diagrammed the sentence!', 'success');
            this.score += 10;
            this.correctAttempts++;
            this.streak++;
            this.updateStats();
            setTimeout(() => this.loadNewSentence(), 2000);
        }
    }

    showFeedback(message, type) {
        this.feedbackElement.textContent = message;
        this.feedbackElement.className = `feedback ${type}`;
        this.feedbackElement.style.display = 'block';
        
        if (type === 'success') {
            setTimeout(() => {
                this.feedbackElement.style.display = 'none';
            }, 2000);
        }
    }

    updateStats() {
        this.scoreElement.textContent = this.score;
        this.levelElement.textContent = this.level;
        this.streakElement.textContent = this.streak;
    }

    levelUp() {
        if (this.level < 5) {
            this.level++;
            this.showFeedback(`Level ${this.level} unlocked!`, 'success');
        } else {
            this.showFeedback('Congratulations! You have completed all levels!', 'success');
        }
    }

    showHint() {
        if (!this.currentSentence) return;
        
        const hint = this.currentSentence.explanation || 'Study the sentence structure carefully.';
        document.getElementById('hint-text').textContent = hint;
        this.hintModal.style.display = 'flex';
    }

    hideHint() {
        this.hintModal.style.display = 'none';
    }

    shareGame() {
        if (navigator.share) {
            navigator.share({
                title: 'Sentence Diagramming Game',
                text: 'Check out this educational sentence diagramming game for SAT/ACT preparation!',
                url: window.location.href
            }).then(() => {
                this.showShareMessage('Game shared successfully!');
            }).catch(() => {
                this.showShareMessage('Sharing is not available on this device.');
            });
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(window.location.href).then(() => {
                this.showShareMessage('Link copied to clipboard!');
            }).catch(() => {
                this.showShareMessage('Failed to copy link.');
            });
        }
    }

    showShareMessage(message) {
        this.shareMessage.textContent = message;
        this.shareMessage.style.display = 'block';
        
        setTimeout(() => {
            this.shareMessage.style.display = 'none';
        }, 3000);
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SentenceDiagrammingGame();
});
