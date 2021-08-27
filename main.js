

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
        'quiz-ans-explanation': QuizAnsExplanationComponent

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
                    qstText: "WHich of the following could lead to an increase in the supply for quad bikes?",
                    optA: "A. A decrease in the number of sellers of quad bikes.",
                    optB: "B. An increase in the price of inputs used to make quad bikes.",
                    optC: "C. An increase in consumers' income, assuming quad bikes are a normal good.",
                    optD: "D. An improvement in technology used in the production of quad bikes.",
                    userInput: null,
                    correctAns: "D",
                    explanation: "Supply reflects the quantity of a good or service that producers are willing to supply at each price point in a given time.\
                    An improvement in the technology used in the production of quad bikes means that suppliers can now produce more quad bikes at each price\
                    point in a given time. This represents a positive exogenous shock to supply and as a result the supply of quad bikes will increase."
                },
                {
                    qstId: 2,
                    category: 1,
                    qstText: "Which of the following events will cause an increase in the market demand for Castle (a brand of beer)?",
                    optA: "A. An increase in the price of Lion (another brand of beer).",
                    optB: "B. A decrease in the price of Castle.",
                    optC: "C. An increase in the price of Messaris peanuts (a complementary good).",
                    optD: "D. An increase in income, if Castle is an inferioir good.",
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
                    qstText: "Savers Shopping Store is the main store in a small village. It orders 500 bottles of milk each week and sells them at a price of R20.00\
                    per bottle. At the end of the first week, they have only sold 280 bottles. What economic situation is the store facing and what will have to\
                    happen to the price in order for equilibrium to be attained?",
                    optA: "A. Surplus. price will rise",
                    optB: "B. Shortage; price will fall.",
                    optC: "C. Surplus; price will fall.",
                    optD: "D. Shortage: price will rise.",
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
                    qstText: "A person stocks shelves at a grocery store and receives a wage. They have completed an exchange in which part of the circular flow model?.",
                    optA: "A. Product Market.",
                    optB: "B. Business/Firm.",
                    optC: "C. Factor Market.",
                    optD: "D. Individuals.",
                    userInput: null,
                    correctAns: "C",
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
