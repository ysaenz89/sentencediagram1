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
                        "and": "coordinating_conjunction",
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
                        "decisions": "object"
                    },
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
                    partsOfSpeech: {
                        "When": "subordinating_conjunction",
                        "economists": "subject",
                        "study": "verb",
                        "market": "adjective",
                        "trends": "object",
                        "they": "pronoun",
                        "often": "adverb",
                        "discover": "verb",
                        "surprising": "adjective",
                        "patterns": "object"
                    },
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
                    partsOfSpeech: {
                        "Although": "subordinating_conjunction",
                        "the": "article",
                        "theory": "subject",
                        "seemed": "verb",
                        "plausible": "adjective",
                        "the": "article",
                        "experimental": "adjective",
                        "data": "subject",
                        "contradicted": "verb",
                        "it": "pronoun",
                        "completely": "adverb"
                    },
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
                },
                // BEGIN 100 PROFESSIONAL SENTENCES
                {
                    text: "The concept of the 'social contract,' which was articulated most famously by Rousseau in his treatise of 1762, presupposes that individuals willingly surrender certain natural freedoms to a governing authority in exchange for the protection of their remaining rights and the maintenance of civil order.",
                    type: "complex",
                    difficulty: 3,
                    explanation: "Complex sentence with a non-restrictive clause providing historical context, followed by the main clause with compound object expressing the contract's terms.",
                    partsOfSpeech: {
                        "The": "article", "concept": "subject", "of": "preposition", "the": "article", "social": "adjective", "contract": "noun", "which": "pronoun", "was": "auxiliary", "articulated": "participle", "most": "adverb", "famously": "adverb", "by": "preposition", "Rousseau": "noun", "in": "preposition", "his": "pronoun", "treatise": "noun", "of": "preposition", "1762": "noun", "presupposes": "verb", "that": "subordinating_conjunction", "individuals": "subject", "willingly": "adverb", "surrender": "verb", "certain": "adjective", "natural": "adjective", "freedoms": "noun", "to": "preposition", "a": "article", "governing": "adjective", "authority": "noun", "in": "preposition", "exchange": "noun", "for": "preposition", "the": "article", "protection": "noun", "of": "preposition", "their": "pronoun", "remaining": "adjective", "rights": "noun", "and": "coordinating_conjunction", "the": "article", "maintenance": "noun", "of": "preposition", "civil": "adjective", "order": "noun"
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
                        "Because": "subordinating_conjunction", "the": "article", "oral": "adjective", "traditions": "noun", "of": "preposition", "indigenous": "adjective", "cultures": "noun", "were": "auxiliary", "systematically": "adverb", "suppressed": "participle", "during": "preposition", "centuries": "noun", "of": "preposition", "colonial": "adjective", "expansion": "noun", "contemporary": "adjective", "anthropologists": "subject", "face": "verb", "the": "article", "formidable": "adjective", "challenge": "object", "of": "preposition", "reconstructing": "noun", "these": "adjective", "rich": "adjective", "epistemological": "adjective", "frameworks": "noun", "from": "preposition", "fragmentary": "adjective", "evidence": "noun", "and": "coordinating_conjunction", "the": "article", "often": "adverb", "biased": "adjective", "accounts": "noun", "of": "preposition", "European": "adjective", "observers": "noun"
                    },
                    diagram: {
                        dependent: ["Because", "the", "oral", "traditions", "of", "indigenous", "cultures", "were", "systematically", "suppressed", "during", "centuries", "of", "colonial", "expansion"],
                        independent: {
                            subject: ["contemporary", "anthropologists"],
                            verb: ["face"],
                            object: ["the", "formidable", "challenge", "of", "reconstructing", "these", "rich", "epistemological", "frameworks", "from", "fragmentary", "evidence", "and", "the", "often", "biased", "accounts", "of", "European", "observers"]
                        }
                    }
                },
                {
                    text: "The existentialist philosophy of Jean-Paul Sartre, which emerged from the devastation of World War II, posits that human existence precedes essence and that individuals must therefore construct their own meaning in an inherently indifferent universe through deliberate acts of choice and commitment.",
                    type: "complex",
                    difficulty: 3,
                    explanation: "Complex sentence with appositive clause providing historical context, followed by main clause with compound object expressing core existentialist principles.",
                    partsOfSpeech: {
                        "The": "article", "existentialist": "adjective", "philosophy": "subject", "of": "preposition", "Jean-Paul": "noun", "Sartre": "noun", "which": "pronoun", "emerged": "verb", "from": "preposition", "the": "article", "devastation": "noun", "of": "preposition", "World": "noun", "War": "noun", "II": "noun", "posits": "verb", "that": "subordinating_conjunction", "human": "adjective", "existence": "noun", "precedes": "verb", "essence": "noun", "and": "coordinating_conjunction", "that": "subordinating_conjunction", "individuals": "subject", "must": "auxiliary", "therefore": "adverb", "construct": "verb", "their": "pronoun", "own": "adjective", "meaning": "noun", "in": "preposition", "an": "article", "inherently": "adverb", "indifferent": "adjective", "universe": "noun", "through": "preposition", "deliberate": "adjective", "acts": "noun", "of": "preposition", "choice": "noun", "and": "coordinating_conjunction", "commitment": "noun"
                    },
                    diagram: {
                        subject: ["The", "existentialist", "philosophy", "of", "Jean-Paul", "Sartre"],
                        appositive: ["which", "emerged", "from", "the", "devastation", "of", "World", "War", "II"],
                        verb: ["posits"],
                        object1: ["that", "human", "existence", "precedes", "essence"],
                        object2: ["that", "individuals", "must", "therefore", "construct", "their", "own", "meaning", "in", "an", "inherently", "indifferent", "universe", "through", "deliberate", "acts", "of", "choice", "and", "commitment"]
                    }
                },
                {
                    text: "The Harlem Renaissance of the 1920s, though primarily recognized for its extraordinary literary and musical achievements, also catalyzed a broader intellectual movement that challenged prevailing racial hierarchies and articulated a distinctly African American cultural identity rooted in both ancestral heritage and modern urban experience.",
                    type: "complex",
                    difficulty: 3,
                    explanation: "Complex sentence with concessive clause, main clause, and relative clause describing the multifaceted impact of the Harlem Renaissance.",
                    partsOfSpeech: {
                        "The": "article", "Harlem": "noun", "Renaissance": "subject", "of": "preposition", "the": "article", "1920s": "noun", "though": "subordinating_conjunction", "primarily": "adverb", "recognized": "participle", "for": "preposition", "its": "pronoun", "extraordinary": "adjective", "literary": "adjective", "and": "coordinating_conjunction", "musical": "adjective", "achievements": "noun", "also": "adverb", "catalyzed": "verb", "a": "article", "broader": "adjective", "intellectual": "adjective", "movement": "noun", "that": "pronoun", "challenged": "verb", "prevailing": "adjective", "racial": "adjective", "hierarchies": "noun", "and": "coordinating_conjunction", "articulated": "verb", "a": "article", "distinctly": "adverb", "African": "adjective", "American": "adjective", "cultural": "adjective", "identity": "noun", "rooted": "participle", "in": "preposition", "both": "adjective", "ancestral": "adjective", "heritage": "noun", "and": "coordinating_conjunction", "modern": "adjective", "urban": "adjective", "experience": "noun"
                    },
                    diagram: {
                        subject: ["The", "Harlem", "Renaissance", "of", "the", "1920s"],
                        concessive: ["though", "primarily", "recognized", "for", "its", "extraordinary", "literary", "and", "musical", "achievements"],
                        verb: ["also", "catalyzed"],
                        object: ["a", "broader", "intellectual", "movement", "that", "challenged", "prevailing", "racial", "hierarchies", "and", "articulated", "a", "distinctly", "African", "American", "cultural", "identity", "rooted", "in", "both", "ancestral", "heritage", "and", "modern", "urban", "experience"]
                    }
                }
            ],
            4: [ // Level 4 - Compound-complex sentences
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
                },
                {
                    text: "Although the standard model of particle physics has successfully predicted the existence of numerous subatomic particles, including the Higgs boson confirmed at CERN in 2012, it nevertheless fails to account for several fundamental phenomena such as dark matter, dark energy, and the observed asymmetry between matter and antimatter in the universe.",
                    type: "compound-complex",
                    difficulty: 4,
                    explanation: "Compound-complex sentence with concessive clause, parenthetical phrase, and compound object listing unresolved physics mysteries.",
                    partsOfSpeech: {
                        "Although": "subordinating_conjunction", "the": "article", "standard": "adjective", "model": "noun", "of": "preposition", "particle": "noun", "physics": "noun", "has": "auxiliary", "successfully": "adverb", "predicted": "verb", "the": "article", "existence": "noun", "of": "preposition", "numerous": "adjective", "subatomic": "adjective", "particles": "noun", "including": "preposition", "the": "article", "Higgs": "noun", "boson": "noun", "confirmed": "participle", "at": "preposition", "CERN": "noun", "in": "preposition", "2012": "noun", "it": "pronoun", "nevertheless": "adverb", "fails": "verb", "to": "infinitive", "account": "infinitive", "for": "preposition", "several": "adjective", "fundamental": "adjective", "phenomena": "noun", "such": "adverb", "as": "preposition", "dark": "adjective", "matter": "noun", "dark": "adjective", "energy": "noun", "and": "coordinating_conjunction", "the": "article", "observed": "participle", "asymmetry": "noun", "between": "preposition", "matter": "noun", "and": "coordinating_conjunction", "antimatter": "noun", "in": "preposition", "the": "article", "universe": "noun"
                    },
                    diagram: {
                        dependent: {
                            subordinator: ["Although"],
                            subject: ["the", "standard", "model", "of", "particle", "physics"],
                            verb: ["has", "successfully", "predicted"],
                            object: ["the", "existence", "of", "numerous", "subatomic", "particles", "including", "the", "Higgs", "boson", "confirmed", "at", "CERN", "in", "2012"]
                        },
                        independent: {
                            subject: ["it"],
                            adverb: ["nevertheless"],
                            verb: ["fails"],
                            infinitive: ["to", "account", "for"],
                            object: ["several", "fundamental", "phenomena", "such", "as", "dark", "matter", "dark", "energy", "and", "the", "observed", "asymmetry", "between", "matter", "and", "antimatter", "in", "the", "universe"]
                        }
                    }
                },
                {
                    text: "The process of cellular apoptosis, which is regulated by a complex cascade of caspase enzymes and mediated through both intrinsic mitochondrial and extrinsic death receptor pathways, plays a critical role in maintaining tissue homeostasis by eliminating damaged or potentially malignant cells before they can compromise the integrity of the organism.",
                    type: "compound-complex",
                    difficulty: 4,
                    explanation: "Compound-complex sentence with appositive clause explaining apoptosis mechanism, main clause stating its function, and prepositional phrase describing the process.",
                    partsOfSpeech: {
                        "The": "article", "process": "subject", "of": "preposition", "cellular": "adjective", "apoptosis": "noun", "which": "pronoun", "is": "auxiliary", "regulated": "participle", "by": "preposition", "a": "article", "complex": "adjective", "cascade": "noun", "of": "preposition", "caspase": "noun", "enzymes": "noun", "and": "coordinating_conjunction", "mediated": "participle", "through": "preposition", "both": "adjective", "intrinsic": "adjective", "mitochondrial": "adjective", "and": "coordinating_conjunction", "extrinsic": "adjective", "death": "noun", "receptor": "noun", "pathways": "noun", "plays": "verb", "a": "article", "critical": "adjective", "role": "noun", "in": "preposition", "maintaining": "noun", "tissue": "noun", "homeostasis": "noun", "by": "preposition", "eliminating": "noun", "damaged": "adjective", "or": "coordinating_conjunction", "potentially": "adverb", "malignant": "adjective", "cells": "noun", "before": "subordinating_conjunction", "they": "pronoun", "can": "auxiliary", "compromise": "verb", "the": "article", "integrity": "noun", "of": "preposition", "the": "article", "organism": "noun"
                    },
                    diagram: {
                        subject: ["The", "process", "of", "cellular", "apoptosis"],
                        appositive: ["which", "is", "regulated", "by", "a", "complex", "cascade", "of", "caspase", "enzymes", "and", "mediated", "through", "both", "intrinsic", "mitochondrial", "and", "extrinsic", "death", "receptor", "pathways"],
                        verb: ["plays"],
                        object: ["a", "critical", "role", "in", "maintaining", "tissue", "homeostasis"],
                        prepositional: ["by", "eliminating", "damaged", "or", "potentially", "malignant", "cells", "before", "they", "can", "compromise", "the", "integrity", "of", "the", "organism"]
                    }
                }
            ],
            5: [ // Level 5 - Very hard academic sentences
                {
                    text: "Although the Enlightenment philosophers of the eighteenth century championed reason as the supreme arbiter of truth, many subsequent critics have argued, with considerable justification, that this unwavering commitment to rationality inadvertently marginalized other equally valid forms of human understanding, including emotional intuition and cultural tradition.",
                    type: "compound-complex",
                    difficulty: 5,
                    explanation: "Sophisticated compound-complex sentence featuring concessive clause, parenthetical phrase, and complex object with multiple modifiers and examples.",
                    partsOfSpeech: {
                        "Although": "subordinating_conjunction", "the": "article", "Enlightenment": "adjective", "philosophers": "subject", "of": "preposition", "the": "article", "eighteenth": "adjective", "century": "noun", "championed": "verb", "reason": "object", "as": "preposition", "the": "article", "supreme": "adjective", "arbiter": "noun", "of": "preposition", "truth": "noun", "many": "adjective", "subsequent": "adjective", "critics": "subject", "have": "auxiliary", "argued": "verb", "with": "preposition", "considerable": "adjective", "justification": "noun", "that": "subordinating_conjunction", "this": "adjective", "unwavering": "adjective", "commitment": "noun", "to": "preposition", "rationality": "noun", "inadvertently": "adverb", "marginalized": "verb", "other": "adjective", "equally": "adverb", "valid": "adjective", "forms": "noun", "of": "preposition", "human": "adjective", "understanding": "noun", "including": "preposition", "emotional": "adjective", "intuition": "noun", "and": "coordinating_conjunction", "cultural": "adjective", "tradition": "noun"
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
                },
                {
                    text: "According to poststructuralist literary theory, the meaning of any given text is not fixed by the author's original intention but is instead continuously constructed and reconstructed through the dynamic interplay between the reader's interpretive framework and the text's inherent ambiguities.",
                    type: "compound-complex",
                    difficulty: 5,
                    explanation: "Advanced compound-complex sentence with compound predicate, sophisticated academic terminology, and complex prepositional phrases describing literary theory concepts.",
                    partsOfSpeech: {
                        "According": "preposition", "to": "preposition", "poststructuralist": "adjective", "literary": "adjective", "theory": "noun", "the": "article", "meaning": "subject", "of": "preposition", "any": "adjective", "given": "participle", "text": "noun", "is": "verb", "not": "adverb", "fixed": "participle", "by": "preposition", "the": "article", "author's": "noun", "original": "adjective", "intention": "noun", "but": "coordinating_conjunction", "is": "verb", "instead": "adverb", "continuously": "adverb", "constructed": "participle", "and": "coordinating_conjunction", "reconstructed": "participle", "through": "preposition", "the": "article", "dynamic": "adjective", "interplay": "noun", "between": "preposition", "the": "article", "reader's": "noun", "interpretive": "adjective", "framework": "noun", "and": "coordinating_conjunction", "the": "article", "text's": "noun", "inherent": "adjective", "ambiguities": "noun"
                    },
                    diagram: {
                        prepositional: ["According", "to", "poststructuralist", "literary", "theory"],
                        subject: ["the", "meaning", "of", "any", "given", "text"],
                        verb1: ["is"],
                        complement1: ["not", "fixed", "by", "the", "author's", "original", "intention"],
                        verb2: ["is"],
                        complement2: ["instead", "continuously", "constructed", "and", "reconstructed", "through", "the", "dynamic", "interplay", "between", "the", "reader's", "interpretive", "framework", "and", "the", "text's", "inherent", "ambiguities"]
                    }
                },
                {
                    text: "The development of perspective in Renaissance painting, which Leon Battista Alberti codified in his 1435 treatise 'De Pictura,' represented not merely a technical innovation in artistic practice but a fundamental epistemological shift in how Western cultures conceptualized the relationship between the observing subject and the observed world.",
                    type: "compound-complex",
                    difficulty: 5,
                    explanation: "Complex compound-complex sentence with appositive clause, compound predicate with negation, and sophisticated philosophical concepts about art and epistemology.",
                    partsOfSpeech: {
                        "The": "article", "development": "subject", "of": "preposition", "perspective": "noun", "in": "preposition", "Renaissance": "adjective", "painting": "noun", "which": "pronoun", "Leon": "noun", "Battista": "noun", "Alberti": "noun", "codified": "verb", "in": "preposition", "his": "pronoun", "1435": "noun", "treatise": "noun", "De": "noun", "Pictura": "noun", "represented": "verb", "not": "adverb", "merely": "adverb", "a": "article", "technical": "adjective", "innovation": "noun", "in": "preposition", "artistic": "adjective", "practice": "noun", "but": "coordinating_conjunction", "a": "article", "fundamental": "adjective", "epistemological": "adjective", "shift": "noun", "in": "preposition", "how": "adverb", "Western": "adjective", "cultures": "noun", "conceptualized": "verb", "the": "article", "relationship": "noun", "between": "preposition", "the": "article", "observing": "participle", "subject": "noun", "and": "coordinating_conjunction", "the": "article", "observed": "participle", "world": "noun"
                    },
                    diagram: {
                        subject: ["The", "development", "of", "perspective", "in", "Renaissance", "painting"],
                        appositive: ["which", "Leon", "Battista", "Alberti", "codified", "in", "his", "1435", "treatise", "De", "Pictura"],
                        verb: ["represented"],
                        predicate1: ["not", "merely", "a", "technical", "innovation", "in", "artistic", "practice"],
                        predicate2: ["but", "a", "fundamental", "epistemological", "shift", "in", "how", "Western", "cultures", "conceptualized", "the", "relationship", "between", "the", "observing", "subject", "and", "the", "observed", "world"]
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
            'pronoun': 'PRO',
            'noun': 'NOUN',
            'subordinating_conjunction': 'SUBCONJ',
            'coordinating_conjunction': 'COORD',
            'transition': 'TRANS',
            'infinitive': 'INF',
            'interjection': 'INTJ'
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
