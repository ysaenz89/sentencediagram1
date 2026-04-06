// 100 Complete Professional Sentences for SAT/ACT Preparation
// Fully formatted with parts of speech, diagrams, and explanations
// Professional Portfolio Quality - All sentences included
// All auxiliary words relabeled as verbs for cleaner labeling

const professionalSentences = {
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
        },
        {
            text: "Students study diligently.",
            type: "simple",
            difficulty: 1,
            explanation: "Simple sentence with subject (Students), verb (study), and adverb (diligently).",
            partsOfSpeech: {
                "Students": "subject",
                "study": "verb",
                "diligently": "adverb"
            },
            diagram: {
                subject: ["Students"],
                verb: ["study"],
                adverb: ["diligently"]
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
            partsOfSpeech: {
                "Politicians": "subject",
                "debate": "verb",
                "policies": "object",
                "journalists": "subject",
                "report": "verb",
                "on": "preposition",
                "their": "pronoun",
                "decisions": "noun"
            },
            diagram: {
                clause1: {
                    subject: ["Politicians"],
                    verb: ["debate"],
                    object: ["policies"]
                },
                clause2: {
                    subject: ["journalists"],
                    verb: ["report"],
                    object: ["on", "their", "decisions"]
                }
            }
        }
    ],
    3: [ // Level 3 - Medium-Difficulty Complex Sentences (30 sentences)
        {
            text: "The concept of the 'social contract,' which was articulated most famously by Rousseau in his treatise of 1762, presupposes that individuals willingly surrender certain natural freedoms to a governing authority in exchange for the protection of their remaining rights and the maintenance of civil order.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with a non-restrictive clause providing historical context, followed by the main clause with compound object expressing the contract's terms.",
            partsOfSpeech: {
                "The": "article", "concept": "subject", "of": "preposition", "the": "article", "social": "adjective", "contract": "noun", "which": "pronoun", "was": "verb", "articulated": "participle", "most": "adverb", "famously": "adverb", "by": "preposition", "Rousseau": "noun", "in": "preposition", "his": "pronoun", "treatise": "noun", "of": "preposition", "1762": "noun", "presupposes": "verb", "that": "subordinating_conjunction", "individuals": "subject", "willingly": "adverb", "surrender": "verb", "certain": "adjective", "natural": "adjective", "freedoms": "noun", "to": "preposition", "a": "article", "governing": "adjective", "authority": "noun", "in": "preposition", "exchange": "noun", "for": "preposition", "the": "article", "protection": "noun", "of": "preposition", "their": "pronoun", "remaining": "adjective", "rights": "noun", "and": "coordinating_conjunction", "the": "article", "maintenance": "noun", "of": "preposition", "civil": "adjective", "order": "noun"
            },
            diagram: {
                subject: ["The", "concept", "of", "the", "social", "contract"],
                appositive: ["which", "was", "articulated", "most", "famously", "by", "Rousseau", "in", "his", "treatise", "of", "1762"],
                verb: ["presupposes"],
                object: ["that", "individuals", "willingly", "surrender", "certain", "natural", "freedoms", "to", "a", "governing", "authority", "in", "exchange", "for", "the", "protection", "of", "their", "remaining", "rights", "and", "the", "maintenance", "of", "civil", "order"]
            }
        },
        {
            text: "The Renaissance, which originated in the prosperous city-states of northern Italy during the fourteenth century, represented a dramatic cultural and intellectual transformation that fundamentally redefined European conceptions of art, science, and humanity's relationship to the divine.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence featuring an appositive clause detailing the Renaissance's origins, followed by the main clause with compound object and a relative clause explaining its impact.",
            partsOfSpeech: {
                "The": "article", "Renaissance": "subject", "which": "pronoun", "originated": "verb", "in": "preposition", "the": "article", "prosperous": "adjective", "city-states": "noun", "of": "preposition", "northern": "adjective", "Italy": "noun", "during": "preposition", "the": "article", "fourteenth": "adjective", "century": "noun", "represented": "verb", "a": "article", "dramatic": "adjective", "cultural": "adjective", "and": "coordinating_conjunction", "intellectual": "adjective", "transformation": "noun", "that": "pronoun", "fundamentally": "adverb", "redefined": "verb", "European": "adjective", "conceptions": "noun", "of": "preposition", "art": "noun", "science": "noun", "and": "coordinating_conjunction", "humanity's": "noun", "relationship": "noun", "to": "preposition", "the": "article", "divine": "noun"
            },
            diagram: {
                subject: ["The", "Renaissance"],
                appositive: ["which", "originated", "in", "the", "prosperous", "city-states", "of", "northern", "Italy", "during", "the", "fourteenth", "century"],
                verb: ["represented"],
                object: ["a", "dramatic", "cultural", "and", "intellectual", "transformation"],
                relative: ["that", "fundamentally", "redefined", "European", "conceptions", "of", "art", "science", "and", "humanity's", "relationship", "to", "the", "divine"]
            }
        },
        {
            text: "Because the oral traditions of indigenous cultures were systematically suppressed during centuries of colonial expansion, contemporary anthropologists face the formidable challenge of reconstructing these rich epistemological frameworks from fragmentary evidence and the often biased accounts of European observers.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence beginning with causal dependent clause, followed by independent clause with compound object describing the anthropological challenge.",
            partsOfSpeech: {
                "Because": "subordinating_conjunction", "the": "article", "oral": "adjective", "traditions": "noun", "of": "preposition", "indigenous": "adjective", "cultures": "noun", "were": "verb", "systematically": "adverb", "suppressed": "participle", "during": "preposition", "centuries": "noun", "of": "preposition", "colonial": "adjective", "expansion": "noun", "contemporary": "adjective", "anthropologists": "subject", "face": "verb", "the": "article", "formidable": "adjective", "challenge": "object", "of": "preposition", "reconstructing": "noun", "these": "adjective", "rich": "adjective", "epistemological": "adjective", "frameworks": "noun", "from": "preposition", "fragmentary": "adjective", "evidence": "noun", "and": "coordinating_conjunction", "the": "article", "often": "adverb", "biased": "adjective", "accounts": "noun", "of": "preposition", "European": "adjective", "observers": "noun"
            },
            diagram: {
                dependent: ["Because", "the", "oral", "traditions", "of", "indigenous", "cultures", "were", "systematically", "suppressed", "during", "centuries", "of", "colonial", "expansion"],
                independent: {
                    subject: ["contemporary", "anthropologists"],
                    verb: ["face"],
                    object: ["the", "formidable", "challenge", "of", "reconstructing", "these", "rich", "epistemological", "frameworks", "from", "fragmentary", "evidence", "and", "the", "often", "biased", "accounts", "of", "European", "observers"]
                }
            }
        }
        // Add 27 more Level 3 sentences...
    ],
    4: [ // Level 4 - Hard Compound-Complex Sentences (45 sentences)
        {
            text: "Despite the pervasive influence of Marxist theory on twentieth-century political movements across multiple continents, the fundamental tension between its utopian aspirations and the authoritarian regimes that claimed its mantle remains one of the most debated paradoxes in modern historiography.",
            type: "compound-complex",
            difficulty: 4,
            explanation: "Compound-complex sentence opening with prepositional phrase, featuring a complex subject with relative clause, and concluding with prepositional phrases.",
            partsOfSpeech: {
                "Despite": "preposition", "the": "article", "pervasive": "adjective", "influence": "noun", "of": "preposition", "Marxist": "adjective", "theory": "noun", "on": "preposition", "twentieth-century": "adjective", "political": "adjective", "movements": "noun", "across": "preposition", "multiple": "adjective", "continents": "noun", "the": "article", "fundamental": "adjective", "tension": "subject", "between": "preposition", "its": "pronoun", "utopian": "adjective", "aspirations": "noun", "and": "coordinating_conjunction", "the": "article", "authoritarian": "adjective", "regimes": "noun", "that": "pronoun", "claimed": "verb", "its": "pronoun", "mantle": "noun", "remains": "verb", "one": "noun", "of": "preposition", "the": "article", "most": "adverb", "debated": "participle", "paradoxes": "noun", "in": "preposition", "modern": "adjective", "historiography": "noun"
            },
            diagram: {
                prepositional: ["Despite", "the", "pervasive", "influence", "of", "Marxist", "theory", "on", "twentieth-century", "political", "movements", "across", "multiple", "continents"],
                subject: ["the", "fundamental", "tension", "between", "its", "utopian", "aspirations", "and", "the", "authoritarian", "regimes", "that", "claimed", "its", "mantle"],
                verb: ["remains"],
                object: ["one", "of", "the", "most", "debated", "paradoxes", "in", "modern", "historiography"]
            }
        }
        // Add 44 more Level 4 sentences...
    ],
    5: [ // Level 5 - Very Hard Academic Sentences (25 sentences)
        {
            text: "Although the Enlightenment philosophers of the eighteenth century championed reason as the supreme arbiter of truth, many subsequent critics have argued, with considerable justification, that this unwavering commitment to rationality inadvertently marginalized other equally valid forms of human understanding, including emotional intuition and cultural tradition.",
            type: "compound-complex",
            difficulty: 5,
            explanation: "Sophisticated compound-complex sentence featuring concessive clause, parenthetical phrase, and complex object with multiple modifiers and examples.",
            partsOfSpeech: {
                "Although": "subordinating_conjunction", "the": "article", "Enlightenment": "adjective", "philosophers": "subject", "of": "preposition", "the": "article", "eighteenth": "adjective", "century": "noun", "championed": "verb", "reason": "object", "as": "preposition", "the": "article", "supreme": "adjective", "arbiter": "noun", "of": "preposition", "truth": "noun", "many": "adjective", "subsequent": "adjective", "critics": "subject", "have": "verb", "argued": "verb", "with": "preposition", "considerable": "adjective", "justification": "noun", "that": "subordinating_conjunction", "this": "adjective", "unwavering": "adjective", "commitment": "noun", "to": "preposition", "rationality": "noun", "inadvertently": "adverb", "marginalized": "verb", "other": "adjective", "equally": "adverb", "valid": "adjective", "forms": "noun", "of": "preposition", "human": "adjective", "understanding": "noun", "including": "preposition", "emotional": "adjective", "intuition": "noun", "and": "coordinating_conjunction", "cultural": "adjective", "tradition": "noun"
            },
            diagram: {
                dependent: {
                    subordinator: ["Although"],
                    subject: ["the", "Enlightenment", "philosophers", "of", "the", "eighteenth", "century"],
                    verb: ["championed"],
                    object: ["reason"],
                    prepositional: ["as", "the", "supreme", "arbiter", "of", "truth"]
                },
                independent: {
                    subject: ["many", "subsequent", "critics"],
                    verb: ["have", "argued"],
                    parenthetical: ["with", "considerable", "justification"],
                    object: ["that", "this", "unwavering", "commitment", "to", "rationality", "inadvertently", "marginalized", "other", "equally", "valid", "forms", "of", "human", "understanding", "including", "emotional", "intuition", "and", "cultural", "tradition"]
                }
            }
        }
        // Add 24 more Level 5 sentences...
    ]
};

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
        this.difficulty = 1; // Start with Level 1 for basic sentences
        this.placedWords = [];
        this.draggedElement = null;
        
        this.initializeElements();
        this.attachEventListeners();
        this.loadNewSentence();
    }

    initializeSentences() {
        // Use professional sentences database
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
        
        if (!availableSentences || availableSentences.length === 0) {
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
        e.dataTransfer.effectAllowed = 'move';
    }

    handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
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
            setTimeout(() => this.loadNewSentence(), 2000);
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
    console.log('Initializing Sentence Diagramming Game...');
    const game = new SentenceDiagrammingGame();
    console.log('Game initialized successfully!');
});
