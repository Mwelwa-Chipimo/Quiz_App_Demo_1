

var QuizAnsExplanationComponent = {
    template: "#quiz-ans-explanation-template",
    props: {
        question: Object
    },

    data() {
        return {
            show: false,
        }
    }
}

let QuizQuestionComponent = {
    components: {
        'quiz-ans-explanation': QuizAnsExplanationComponent
    },

    props: {
        isCompleted: Boolean,
        isDisabled: Boolean,
        question: Object
    },

    template: '#quiz-question-template'
}

var QuizReportComponent  = {
    template: '#quiz-report-template',
    props: {
        isCompleted: Boolean
    }

}

// CHANGE TO BE MADE
// Make quiz form a global component.

var QuizFormComponent = {
    template: '#quiz-form-template',

    components: {
        'quiz-question': QuizQuestionComponent,
        'quiz-report': QuizReportComponent,
        'quiz-ans-explanation': QuizAnsExplanationComponent,

    },

    data() {
        return {
            isCompleted: false,
            totalAnswered: 0,
            totalScore: 0,
            errors: [],
            questions: [
                {
                    qstId: 1,
                    category: 0,
                    qstText: "If the principal concern of economics is the question of how best to use society’s\
                     resources, then economics would be irrelevant if",
                    isImage: 0,
                    qstImage: "",
                    optA: "A. we had unlimited wants.",
                    optB: "B. economics were organised around command rather than market principles.",
                    optC: "C. economics were organised around the market rather than command principles.",
                    optD: "D. resources were available in unlimited quantities.",
                    optE: "E. incomes were distributed more equally.",
                    userInput: null,
                    correctAns: "D",
                    explanation: "Supply reflects the quantity of a good or service that producers are willing to supply at each price point in a given time.\
                    An improvement in the technology used in the production of quad bikes means that suppliers can now produce more quad bikes at each price\
                    point in a given time. This represents a positive exogenous shock to supply and as a result the supply of quad bikes will increase."
                },
                {
                    qstId: 2,
                    category: 1,
                    qstText: "In the circular flow of economic activity, __________ households in __________ markets represents\
                     __________ firms. Taxes and imports represent __________ in the cicular flow.",
                    isImage: 0,
                    qstImage: "",
                    optA: "A. expenditure by; goods; income to; injections into",
                    optB: "B. expenditure by; factor; income to; withdrawals from",
                    optC: "C. income to; factor; expenditure by; withdrawals from",
                    optD: "D. income to; goods; expenditure by; injections into",
                    optE: "E. expenditure by; factor; income to; injections into",
                    userInput: null,
                    correctAns: "A",
                    explanation: "Demand reflects the quantity of a good or service that potential buyers are willing to purchase at each price point in a given time period.\
                    Under the assumption that Castle beer is a normal good, an increase in the price of a substitute good - Lion beer - will lead to an increase tn\
                    the demand for Castle beer. That is, consumers will demand a greater quantity of Caste beer at each price point in a given time period.\
                    Other factors that could lead to an increase/decrease in the demand for a good or service include; (i) a decrease/increase in the price of complementary\
                    goods or (ii) an increase/decrease in income."
                },
                {
                    qstId: 3,
                    category: 0,
                    qstText: "The law of supply states that, ceteris paribus,",
                    isImage: 0,
                    qstImage: "",
                    optA: "A. firms’ supply will increase if the price rises.",
                    optB: "B. the market price will rise if the supply is higher.",
                    optC: "C. the quantity supplied will increase if the price rises.",
                    optD: "D. firms’ supply will increase if technology improves.",
                    optE: "E. a decrease in supply will decrease the price.",
                    userInput: null,
                    correctAns: "C",
                    explanation: "At a price of R20.00 there will be a surplus of 220 bottles of milk because the quantity supplied (500 bottles) will be greater than the\
                    quantity demanded (280 bottles). In response to this surplus, the suppliers will lower both the price of a bottle of milk and the quantity that they supply, in the next period.\
                    The lower price of a botlle of milk will lead to a greater quantity demanded for it by consumers. If a surplus stiil exists after this process, then the suppliers\
                    will lower their prices again, and the whole process will repeat itself until the quantity demanded equals the quantity supplied."
                },
                {
                    qstId: 4,
                    category: 1,
                    qstText: "The price of party balloons is 20 percent higher this year than it was last\
                     year, while the quantity sold increased by 10 percent. The cause of this is possibly",
                    isImage: 0,
                    qstImage: "",
                    optA: "A. that the cost of rubber (of which balloons are made) has increased.",
                    optB: "B. that the price of rubber gloves (which is a substitute in production) has increased.",
                    optC: "C. that people’s incomes have decreased (balloons are a normal product).",
                    optD: "D. that people are having more parties this year.",
                    optE: "E. because all of the above are correct.",
                    userInput: null,
                    correctAns: "C",
                    explanation: "Individuals and businesses/firms are two economic agents that engage in exchanges/transactions with eaxh other in the circular flow model of payments.\
                    The transactions, in this model, either occur in the factor market or the product market. In the factor market, individuals sells their labour\
                    (a factor of production) to businesses/firms in exchange for an income/wage. In the product market, individuals purchase goods or services from firms with the\
                    income/wages that they receive. The type of exchange described in the question represents a transaction in the factor market,"                   
                },
                {
                    qstId: 5,
                    category: 0,
                    qstText: "Suppose the price elasticity of demand for rugby balls is 1.20. A 15 percent increase in price\
                     will result in",
                    isImage: 0,
                    qstImage: "",
                    optA: "A. an 18 percent decrease in the quantity of rugby balls demanded.",
                    optB: "B. a 15 percent decrease in the quantity of rugby balls demanded.",
                    optC: "C. an 8 percent decrease in the number of rugby balls demanded.",
                    optD: "D. a 12.5% percent decrease in the number of rugby balls demanded.",
                    optE: "E. an 8 percent increase in the quantity of rugby balls demanded.",
                    userInput: null,
                    correctAns: "D",
                    explanation: "Individuals and businesses/firms are two economic agents that engage in exchanges/transactions with eaxh other in the circular flow model of payments.\
                    The transactions, in this model, either occur in the factor market or the product market. In the factor market, individuals sells their labour\
                    (a factor of production) to businesses/firms in exchange for an income/wage. In the product market, individuals purchase goods or services from firms with the\
                    income/wages that they receive. The type of exchange described in the question represents a transaction in the factor market,"
                },
                {
                    qstId: 6,
                    category: 1,
                    qstText: "Suppose there is an increase in the price of margarine, a substitute product for butter.\
                     This causes, ceteris paribus,",
                    isImage: 0,
                    qstImage: "",
                    optA: "A. a rightward move along the supply curve for butter and a butter price increase.",
                    optB: "B. a rightward shift of the supply curve for butter and a butter price increase.",
                    optC: "C. a rightward shift of the supply curve for butter and a butter price decrease.",
                    optD: "D. a leftward shift of the supply curve for butter and a butter price decrease.",
                    optE: "E. a leftward move along the supply curve for butter and a butter price decrease.",
                    userInput: null,
                    correctAns: "D",
                    explanation: "Individuals and businesses/firms are two economic agents that engage in exchanges/transactions with eaxh other in the circular flow model of payments.\
                    The transactions, in this model, either occur in the factor market or the product market. In the factor market, individuals sells their labour\
                    (a factor of production) to businesses/firms in exchange for an income/wage. In the product market, individuals purchase goods or services from firms with the\
                    income/wages that they receive. The type of exchange described in the question represents a transaction in the factor market,"
                },
                {
                    qstId: 7,
                    category: 1,
                    qstText: "In the graph below, both the demand and the supply curves are linear. The supply function is",
                    isImage: 1,
                    qstImage: "images/question_7.png",
                    optA: "A. Qs = (2/30)P + 2",
                    optB: "B. Qs = 5P − 10",
                    optC: "C. Qs = 2P + 15",
                    optD: "D. Qs = 15P − 30",
                    optE: "E. not clear given the information on the graph.",
                    userInput: null,
                    correctAns: "D",
                    explanation: "Individuals and businesses/firms are two economic agents that engage in exchanges/transactions with eaxh other in the circular flow model of payments.\
                    The transactions, in this model, either occur in the factor market or the product market. In the factor market, individuals sells their labour\
                    (a factor of production) to businesses/firms in exchange for an income/wage. In the product market, individuals purchase goods or services from firms with the\
                    income/wages that they receive. The type of exchange described in the question represents a transaction in the factor market,"
                },
                {
                    qstId: 8,
                    category: 1,
                    qstText: "The table below lists six points on the PPF for grain and cars. What is the\
                     opportunity cost of producing the fifth ton of grain?",
                    isImage: 1,
                    qstImage: "images/question_8.png",
                    optA: "A. 10 cars.",
                    optB: "B. 6 cars.",
                    optC: "C. 3 cars.",
                    optD: "D. 12 cars.",
                    optE: "E. It cannot be calculated with the given information.",
                    userInput: null,
                    correctAns: "D",
                    explanation: "Individuals and businesses/firms are two economic agents that engage in exchanges/transactions with eaxh other in the circular flow model of payments.\
                    The transactions, in this model, either occur in the factor market or the product market. In the factor market, individuals sells their labour\
                    (a factor of production) to businesses/firms in exchange for an income/wage. In the product market, individuals purchase goods or services from firms with the\
                    income/wages that they receive. The type of exchange described in the question represents a transaction in the factor market,"
                },
                {
                    qstId: 9,
                    category: 1,
                    qstText: "In an economy with a production possibility frontier represented below,",
                    isImage: 1,
                    qstImage: "images/question_9.png",
                    optA: "A. factors of production are equally good at making goods X and Y.",
                    optB: "B. the opportunity cost of increasing the output of good X is decreasing.",
                    optC: "C. the opportunity cost of increasing the output of good Y is zero.",
                    optD: "D. the opportunity cost of increasing the output of good Y is increasing.",
                    optE: "E. at any point in time you can produce either good X or good Y, but not both.",
                    userInput: null,
                    correctAns: "D",
                    explanation: "Individuals and businesses/firms are two economic agents that engage in exchanges/transactions with eaxh other in the circular flow model of payments.\
                    The transactions, in this model, either occur in the factor market or the product market. In the factor market, individuals sells their labour\
                    (a factor of production) to businesses/firms in exchange for an income/wage. In the product market, individuals purchase goods or services from firms with the\
                    income/wages that they receive. The type of exchange described in the question represents a transaction in the factor market,"
                },
                {
                    qstId: 10,
                    category: 1,
                    qstText: "Using the midpoint method, what is the income elasticity\
                     of good Y according to the table below?",
                    isImage: 1,
                    qstImage: "images/question_10.png",
                    optA: "A. -3.33",
                    optB: "B. -2.33",
                    optC: "C. 1.33",
                    optD: "D. 2.33",
                    optE: "E. -1.33",
                    userInput: null,
                    correctAns: "D",
                    explanation: "Individuals and businesses/firms are two economic agents that engage in exchanges/transactions with eaxh other in the circular flow model of payments.\
                    The transactions, in this model, either occur in the factor market or the product market. In the factor market, individuals sells their labour\
                    (a factor of production) to businesses/firms in exchange for an income/wage. In the product market, individuals purchase goods or services from firms with the\
                    income/wages that they receive. The type of exchange described in the question represents a transaction in the factor market,"
                }

            ],
            categories: {
                category_1: 0,
                category_2: 0
            }
        }
    },

//  CHANGE TO BE MADE
//  Add a computed property for the category breakdown (It shows users a breakdown of their performance by category).
    computed: {
        isDisabled () {
            return this.isCompleted
        },

        categoryBreakDown () {

        }
    },

    methods: {
        checkSubmission: function() {
            //console.log('Checking the user submission!');
            this.totalAnswered = 0;
            this.errors= [];

            for(let i = 0; i < this.questions.length; i++) {
                //Check if the user has answered the question.
                this.questions[i].userInput === null ? this.errors.push(`Question ${this.questions[i].qstId}`) : 
                this.totalAnswered++;
            }
            
            console.log('The length of the questions array is ' + this.questions.length);

            if(this.totalAnswered == this.questions.length) {
                //alert("Your answers are being marked.");
                this.isCompleted = true;
                //alert("Your answers have been marked. You can view the explanations now.");
                this.markAnswers();
            }
        },

        markAnswers: function() {
            this.totalScore = 0;

            for(let i = 0; i < this.questions.length; i++) {
                //Check if the user's answer is correct.
                this.questions[i].userInput == this.questions[i].correctAns ? this.totalScore++ && this.categories[this.questions[i].category]++: 
                console.log(`You got question ${this.questions[i].qstId} wrong.`);
            }
        }
    }
}

var Quiz = new Vue({
    el: '#app',
    components: {
        'quiz-form': QuizFormComponent
    }
})
