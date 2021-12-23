// fetch('')

// ques={''}
// function main(){
//     n=Number(document.getElementById('1').innerText)
//     console.log(n)
//     document.getElementById('1').innerHTML=n+1
// }

const Questions = [
    {
		id: 0,
		q: "What is capital of India?",
		a: ["Chennai","Kolkata","Delhi","Mumbai"],
        ans: "Delhi"

	},
	{
		id: 1,
		q: "What is the capital of Jharkhand?",
		a: ["Patna","Pune","Ranchi","Dehradun"],
        ans:"Ranchi"

	},
	{
		id: 2,
		q: "What is the capital of Maharastra",
		a: ["Pune","Mumbai","Hyderabad","Chennai"],
        ans:"Mumbai"
	},
    {
        id:3,
        q:"How many alphabets in English",
        a:[26,27,24,22],
        ans:26
    },
    {
        id:4,
        q:"How many eyes human have",
        a:[1,3,2,5],
        ans:2
    },

]

obj=[
    {
        q:0,
        ans:10
    }
]

let start = true;
var selected = "";

// Iterate
function iterate(id) {
    history.state

	const question = document.getElementById("question");

	question.innerText = Questions[id].q;

	opt1 = document.getElementById('opt1');
	opt2 = document.getElementById('opt2');
	opt3 = document.getElementById('opt3');
	opt4 = document.getElementById('opt4');

	opt1.innerText = Questions[id].a[0];
	opt2.innerText = Questions[id].a[1];
	opt3.innerText = Questions[id].a[2];
	opt4.innerText = Questions[id].a[3];

	
	opt1.addEventListener("click", () => {
		opt1.style.backgroundColor = "yellow";
		opt2.style.backgroundColor = "";
		opt3.style.backgroundColor = "";
		opt4.style.backgroundColor = "";
		selected = opt1.value;
	})
	opt2.addEventListener("click", () => {
		opt1.style.backgroundColor = "";
		opt2.style.backgroundColor = "yellow";
		opt3.style.backgroundColor = "";
		opt4.style.backgroundColor = "";
		selected = opt2.value;
	})
	opt3.addEventListener("click", () => {
		opt1.style.backgroundColor = "";
		opt2.style.backgroundColor = "";
		opt3.style.backgroundColor = "yellow";
		opt4.style.backgroundColor = "";
		selected = opt3.value;
	})
	opt4.addEventListener("click", () => {
		opt1.style.backgroundColor = "";
		opt2.style.backgroundColor = "";
		opt3.style.backgroundColor = "";
		opt4.style.backgroundColor = "yellow";
		selected=opt4.value;
	})
   
        console.log(selected)
    

	
}

if (start) {
	iterate("0");
}

const next = document.getElementsByName('next')[0];
let id = 0;

next.addEventListener("click", () => {
	start = false;

	if (id <=5) {
		id++;
        if (id<5){
            iterate(id);
        }
        // else if(id<=10){
        //     id++
        //     document.getElementById("submit").innerHTML="Submit Your Answer"
        // }
		
        else{
            const result = document.getElementsByClassName("result");
            result[0].innerText= "Your Score is: "+obj[0].q+"/"+obj[0].ans
	        result[1].innerText = Questions.map(item=>("Q. "+item.q+"   Ans. "+item.ans));
        }
		console.log(id);
        console.log(obj[0].q)
	
    }

})
