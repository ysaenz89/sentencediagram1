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
        return {
            1: [ // Level 1 - Basic sentences
                {
                    text: "The philosopher contemplated existence.",
                    type: "simple",
                    difficulty: 1,
                    explanation: "This is a simple sentence with a subject (philosopher) and predicate (contemplated existence).",
                    partsOfSpeech: {
                        "The": "article",
                        "philosopher": "subject",
                        "contemplated": "verb",
                        "existence": "object"
                    },
                    diagram: {
                        subject: ["The", "philosopher"],
                        verb: ["contemplated"],
                        object: ["existence"]
                    }
                },
                {
                    text: "Scientists analyze data carefully.",
                    type: "simple",
                    difficulty: 1,
                    explanation: "Simple sentence with subject (Scientists), verb (analyze), object (data), and adverb (carefully).",
                    partsOfSpeech: {
                        "Scientists": "subject",
                        "analyze": "verb",
                        "data": "object",
                        "carefully": "adverb"
                    },
                    diagram: {
                        subject: ["Scientists"],
                        verb: ["analyze"],
                        object: ["data"],
                        adverb: ["carefully"]
                    }
                }
            ],
            2: [ // Level 2 - Compound sentences
                {
                    text: "The historian researched primary sources, and the archaeologist uncovered artifacts.",
                    type: "compound",
                    difficulty: 2,
                    explanation: "Compound sentence with two independent clauses joined by 'and'. Each clause has its own subject and verb.",
                    partsOfSpeech: {
                        "The": "article",
                        "historian": "subject",
                        "researched": "verb",
                        "primary": "adjective",
                        "sources": "object",
                        "and": "conjunction",
                        "the": "article",
                        "archaeologist": "subject",
                        "uncovered": "verb",
                        "artifacts": "object"
                    },
                    diagram: {
                        clause1: {
                            subject: ["The", "historian"],
                            verb: ["researched"],
                            object: ["primary", "sources"]
                        },
                        clause2: {
                            subject: ["the", "archaeologist"],
                            verb: ["uncovered"],
                            object: ["artifacts"]
                        },
                        conjunction: ["and"]
                    }
                },
                {
                    text: "Politicians debate policies; journalists report on their decisions.",
                    type: "compound",
                    difficulty: 2,
                    explanation: "Compound sentence using a semicolon to connect two closely related independent clauses.",
                    diagram: {
                        clause1: {
                            subject: ["Politicians"],
                            verb: ["debate"],
                            object: ["policies"]
                        },
                        clause2: {
                            subject: ["journalists"],
                            verb: ["report", "on"],
                            object: ["their", "decisions"]
                        },
                        punctuation: [";"]
                    }
                }
            ],
            3: [ // Level 3 - Complex sentences
                {
                    text: "When economists study market trends, they often discover surprising patterns.",
                    type: "complex",
                    difficulty: 3,
                    explanation: "Complex sentence with a dependent clause ('When economists study market trends') and an independent clause.",
                    diagram: {
                        dependent: {
                            subordinator: ["When"],
                            subject: ["economists"],
                            verb: ["study"],
                            object: ["market", "trends"]
                        },
                        independent: {
                            subject: ["they"],
                            adverb: ["often"],
                            verb: ["discover"],
                            object: ["surprising", "patterns"]
                        }
                    }
                },
                {
                    text: "Although the theory seemed plausible, the experimental data contradicted it completely.",
                    type: "complex",
                    difficulty: 3,
                    explanation: "Complex sentence starting with a dependent clause introduced by 'Although'.",
                    diagram: {
                        dependent: {
                            subordinator: ["Although"],
                            subject: ["the", "theory"],
                            verb: ["seemed"],
                            complement: ["plausible"]
                        },
                        independent: {
                            subject: ["the", "experimental", "data"],
                            verb: ["contradicted"],
                            object: ["it"],
                            adverb: ["completely"]
                        }
                    }
                }
            ],
            4: [ // Level 4 - Compound-complex with advanced punctuation
                {
                    text: "The philosopher—who studied existentialism for decades—argued that meaning is subjective; however, his critics maintained that objective truth exists.",
                    type: "compound-complex",
                    difficulty: 4,
                    explanation: "Compound-complex sentence with em dashes for non-restrictive clauses, semicolon, and contrasting conjunction.",
                    diagram: {
                        clause1: {
                            subject: ["The", "philosopher"],
                            appositive: ["who", "studied", "existentialism", "for", "decades"],
                            verb: ["argued"],
                            object: ["that", "meaning", "is", "subjective"]
                        },
                        clause2: {
                            conjunction: ["however"],
                            subject: ["his", "critics"],
                            verb: ["maintained"],
                            object: ["that", "objective", "truth", "exists"]
                        },
                        punctuation: ["—", ";"]
                    }
                },
                {
                    text: "Because the evidence was inconclusive—despite numerous experiments—the scientific community remained divided: some researchers supported the hypothesis, others rejected it entirely.",
                    type: "compound-complex",
                    difficulty: 4,
                    explanation: "Complex sentence with em dash interruption, colon for explanation, and contrasting clauses.",
                    diagram: {
                        main: {
                            dependent: ["Because", "the", "evidence", "was", "inconclusive"],
                            interruption: ["despite", "numerous", "experiments"],
                            subject: ["the", "scientific", "community"],
                            verb: ["remained"],
                            complement: ["divided"]
                        },
                        explanation: {
                            subject: ["some", "researchers"],
                            verb: ["supported"],
                            object: ["the", "hypothesis"]
                        },
                        contrast: {
                            subject: ["others"],
                            verb: ["rejected"],
                            object: ["it", "entirely"]
                        },
                        punctuation: ["—", ":"]
                    }
                }
            ],
            5: [ // Level 5 - Advanced structures with fragments and run-ons to identify
                {
                    text: "The sociological implications of technological advancement—particularly artificial intelligence—present both opportunities and challenges for future generations.",
                    type: "complex",
                    difficulty: 5,
                    explanation: "Complex sentence with long subject phrase containing prepositional phrases and em dash interruption.",
                    diagram: {
                        subject: ["The", "sociological", "implications", "of", "technological", "advancement"],
                        appositive: ["particularly", "artificial", "intelligence"],
                        verb: ["present"],
                        object: ["both", "opportunities", "and", "challenges"],
                        prepositional: ["for", "future", "generations"]
                    }
                },
                {
                    text: "While historians debate the causes of World War I—economic tensions, nationalist movements, and complex alliances—political scientists analyze similar patterns in contemporary international relations.",
                    type: "complex",
                    difficulty: 5,
                    explanation: "Complex sentence with extensive em dash list and academic subject matter.",
                    diagram: {
                        dependent: {
                            subordinator: ["While"],
                            subject: ["historians"],
                            verb: ["debate"],
                            object: ["the", "causes", "of", "World", "War", "I"],
                            examples: ["economic", "tensions", "nationalist", "movements", "and", "complex", "alliances"]
                        },
                        independent: {
                            subject: ["political", "scientists"],
                            verb: ["analyze"],
                            object: ["similar", "patterns"],
                            prepositional: ["in", "contemporary", "international", "relations"]
                        },
                        punctuation: ["—"]
                    }
                }
            ]
        };
    }

    initializeElements() {
        this.elements = {
            sentence: document.getElementById('sentence'),
            sentenceType: document.getElementById('sentence-type'),
            wordBank: document.getElementById('word-bank'),
            diagramCanvas: document.getElementById('diagram-canvas'),
            checkAnswer: document.getElementById('check-answer'),
            hint: document.getElementById('hint'),
            skip: document.getElementById('skip'),
            reset: document.getElementById('reset'),
            feedback: document.getElementById('feedback'),
            feedbackTitle: document.getElementById('feedback-title'),
            feedbackMessage: document.getElementById('feedback-message'),
            explanation: document.getElementById('explanation'),
            correctDiagram: document.getElementById('correct-diagram'),
            nextSentence: document.getElementById('next-sentence'),
            hintModal: document.getElementById('hint-modal'),
            hintText: document.getElementById('hint-text'),
            level: document.getElementById('level'),
            score: document.getElementById('score'),
            streak: document.getElementById('streak'),
            accuracy: document.getElementById('accuracy'),
            shareBtn: document.getElementById('share-btn'),
            shareMessage: document.getElementById('share-message')
        };
    }

    attachEventListeners() {
        this.elements.checkAnswer.addEventListener('click', () => this.checkAnswer());
        this.elements.hint.addEventListener('click', () => this.showHint());
        this.elements.skip.addEventListener('click', () => this.skipSentence());
        this.elements.reset.addEventListener('click', () => this.resetDiagram());
        this.elements.nextSentence.addEventListener('click', () => this.loadNewSentence());
        
        // Share functionality
        if (this.elements.shareBtn) {
            this.elements.shareBtn.addEventListener('click', () => this.shareGame());
        }
        
        // Modal close functionality
        document.querySelector('.close').addEventListener('click', () => {
            this.elements.hintModal.classList.add('hidden');
        });
        
        // Drag and drop for diagram canvas
        this.elements.diagramCanvas.addEventListener('dragover', (e) => this.handleDragOver(e));
        this.elements.diagramCanvas.addEventListener('drop', (e) => this.handleDrop(e));
    }

    loadNewSentence() {
        const levelSentences = this.sentences[this.difficulty] || this.sentences[1];
        this.currentSentence = levelSentences[this.currentIndex % levelSentences.length];
        this.currentIndex++;
        
        this.displaySentence();
        this.createWordBank();
        this.resetDiagram();
        this.hideFeedback();
    }

    displaySentence() {
        this.elements.sentence.textContent = this.currentSentence.text;
        this.elements.sentenceType.textContent = this.currentSentence.type.charAt(0).toUpperCase() + 
                                                 this.currentSentence.type.slice(1) + ' Sentence';
    }

    createWordBank() {
        const words = this.currentSentence.text.split(/\s+/);
        this.elements.wordBank.innerHTML = '';
        
        words.forEach((word, index) => {
            const cleanWord = word.replace(/[.,;:!?—]/, '');
            const wordElement = document.createElement('div');
            wordElement.className = 'word-item';
            
            // Add part of speech indicator if available
            if (this.currentSentence.partsOfSpeech && this.currentSentence.partsOfSpeech[cleanWord]) {
                const pos = this.currentSentence.partsOfSpeech[cleanWord];
                const posTag = document.createElement('span');
                posTag.className = `word-pos-tag ${pos}`;
                posTag.textContent = this.getPosAbbreviation(pos);
                wordElement.appendChild(posTag);
                
                const wordText = document.createElement('span');
                wordText.className = 'word-text';
                wordText.textContent = word;
                wordElement.appendChild(wordText);
            } else {
                wordElement.textContent = word;
            }
            
            wordElement.draggable = true;
            wordElement.dataset.word = cleanWord;
            wordElement.dataset.originalWord = word;
            wordElement.dataset.index = index;
            
            wordElement.addEventListener('dragstart', (e) => this.handleDragStart(e));
            wordElement.addEventListener('dragend', (e) => this.handleDragEnd(e));
            
            this.elements.wordBank.appendChild(wordElement);
        });
    }

    handleDragStart(e) {
        this.draggedElement = e.target;
        e.target.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.innerHTML);
    }

    handleDragEnd(e) {
        e.target.classList.remove('dragging');
    }

    handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        this.elements.diagramCanvas.classList.add('drag-over');
        return false;
    }

    handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        
        this.elements.diagramCanvas.classList.remove('drag-over');
        
        if (this.draggedElement) {
            // Find the nearest drop zone
            const dropZones = document.querySelectorAll('.zone-drop-area');
            const rect = this.elements.diagramCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            let targetZone = null;
            let minDistance = Infinity;
            
            dropZones.forEach(zone => {
                const zoneRect = zone.getBoundingClientRect();
                const zoneX = zoneRect.left - rect.left + zoneRect.width / 2;
                const zoneY = zoneRect.top - rect.top + zoneRect.height / 2;
                const distance = Math.sqrt(Math.pow(x - zoneX, 2) + Math.pow(y - zoneY, 2));
                
                if (distance < minDistance && distance < 100) {
                    minDistance = distance;
                    targetZone = zone;
                }
            });
            
            if (targetZone) {
                this.addToDropZone(this.draggedElement, targetZone);
            } else {
                // Fallback to original behavior
                this.createDiagramElement(this.draggedElement.dataset.word, x, y);
            }
            
            this.draggedElement.classList.add('placed');
            this.draggedElement.draggable = false;
        }
        
        return false;
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
            'pronoun': 'PRO'
        };
        return abbreviations[pos] || pos.toUpperCase();
    }

    addToDropZone(wordElement, dropZone) {
        const placedWord = document.createElement('div');
        placedWord.className = 'placed-word';
        placedWord.textContent = wordElement.dataset.originalWord || wordElement.dataset.word;
        placedWord.dataset.originalWord = wordElement.dataset.originalWord || wordElement.dataset.word;
        placedWord.dataset.word = wordElement.dataset.word;
        
        // Add remove functionality
        placedWord.addEventListener('click', () => {
            placedWord.remove();
            wordElement.classList.remove('placed');
            wordElement.draggable = true;
        });
        
        dropZone.appendChild(placedWord);
        this.placedWords.push({ 
            word: wordElement.dataset.word, 
            element: placedWord, 
            zone: dropZone.parentElement.dataset.zone 
        });
    }

    resetDiagram() {
        // Clear all drop zones
        document.querySelectorAll('.zone-drop-area').forEach(zone => {
            zone.innerHTML = '';
        });
        
        // Clear any free-floating elements
        this.elements.diagramCanvas.querySelectorAll('.diagram-element').forEach(el => el.remove());
        
        this.placedWords = [];
        
        // Reset word bank items
        const wordItems = this.elements.wordBank.querySelectorAll('.word-item');
        wordItems.forEach(item => {
            item.classList.remove('placed');
            item.draggable = true;
        });
    }

    checkAnswer() {
        this.totalAttempts++;
        
        // Simplified checking - in a real implementation, this would be more sophisticated
        const isCorrect = this.placedWords.length > 0; // Basic check
        
        if (isCorrect) {
            this.correctAttempts++;
            this.score += this.difficulty * 10;
            this.streak++;
            this.showFeedback(true);
            this.adjustDifficulty(true);
        } else {
            this.streak = 0;
            this.showFeedback(false);
            this.adjustDifficulty(false);
        }
        
        this.updateStats();
    }

    showFeedback(isCorrect) {
        this.elements.feedback.classList.remove('hidden');
        this.elements.feedback.classList.toggle('error', !isCorrect);
        
        if (isCorrect) {
            this.elements.feedbackTitle.textContent = 'Correct!';
            this.elements.feedbackMessage.textContent = 'Great job diagramming this sentence!';
        } else {
            this.elements.feedbackTitle.textContent = 'Not Quite Right';
            this.elements.feedbackMessage.textContent = 'Let\'s review the correct diagram for this sentence.';
        }
        
        this.elements.explanation.innerHTML = `
            <h4>Explanation:</h4>
            <p>${this.currentSentence.explanation}</p>
        `;
        
        this.elements.correctDiagram.innerHTML = `
            <h4>Correct Structure:</h4>
            <p>${this.formatDiagramStructure(this.currentSentence.diagram)}</p>
        `;
    }

    formatDiagramStructure(diagram) {
        // Simplified formatting - would be more sophisticated in production
        return JSON.stringify(diagram, null, 2).replace(/["{}[\],]/g, '');
    }

    hideFeedback() {
        this.elements.feedback.classList.add('hidden');
    }

    showHint() {
        const hints = [
            "Start by identifying the main subject and verb of the sentence.",
            "Look for the main clause first, then identify any subordinate clauses.",
            "Pay attention to punctuation marks - they often signal clause boundaries.",
            "Compound sentences have two or more independent clauses.",
            "Complex sentences have one independent clause and at least one dependent clause."
        ];
        
        const randomHint = hints[Math.floor(Math.random() * hints.length)];
        this.elements.hintText.textContent = randomHint;
        this.elements.hintModal.classList.remove('hidden');
    }

    skipSentence() {
        this.streak = 0;
        this.loadNewSentence();
        this.updateStats();
    }

    adjustDifficulty(wasCorrect) {
        if (wasCorrect && this.streak >= 3) {
            this.difficulty = Math.min(5, this.difficulty + 1);
            this.level = this.difficulty;
        } else if (!wasCorrect && this.streak === 0) {
            this.difficulty = Math.max(1, this.difficulty - 1);
            this.level = this.difficulty;
        }
    }

    updateStats() {
        this.elements.level.textContent = this.level;
        this.elements.score.textContent = this.score;
        this.elements.streak.textContent = this.streak;
        
        const accuracy = this.totalAttempts > 0 ? 
            Math.round((this.correctAttempts / this.totalAttempts) * 100) : 100;
        this.elements.accuracy.textContent = accuracy + '%';
    }

    shareGame() {
        const url = window.location.href;
        
        if (navigator.share) {
            // Use native share API if available (mobile devices)
            navigator.share({
                title: 'Sentence Diagramming Game - SAT/ACT Prep',
                text: 'Master SAT/ACT grammar through interactive sentence diagramming practice!',
                url: url
            }).then(() => {
                this.showShareMessage('Thanks for sharing!');
            }).catch((error) => {
                console.log('Share cancelled or failed:', error);
            });
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(url).then(() => {
                this.showShareMessage('Link copied to clipboard!');
            }).catch(() => {
                // Final fallback: Select the text
                const textArea = document.createElement('textarea');
                textArea.value = url;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                this.showShareMessage('Link copied to clipboard!');
            });
        }
    }

    showShareMessage(message) {
        if (this.elements.shareMessage) {
            this.elements.shareMessage.textContent = message;
            this.elements.shareMessage.classList.remove('hidden');
            
            setTimeout(() => {
                this.elements.shareMessage.classList.add('hidden');
            }, 3000);
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SentenceDiagrammingGame();
});
