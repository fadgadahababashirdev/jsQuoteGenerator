const viewOtherQuote = document.querySelector('.View-other-quotes');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const btnClose = document.querySelector('.btn-close');
const viewQuote =document.querySelector('.class-orange');
const sectionOne =document.querySelector('.section-one');
const container = document.querySelector('.container');

const quotes = [
    {
        quote:`Education is the most powerful weapon which you can use to change the world.”`,
        person:`Nelson mandela`,
    },
    {
        quote:`We equally reject attempts to prescribe ‘new rights’ that are contrary to our values, norms, traditions, and beliefs. We are not gays!” – UN General Assembly, 2015`,
        person:`Robert Mugabe`,
    },
    {
        quote:`In a state of poverty, illiteracy, people just remain exposed to all kinds of manipulation. That's what we have lived. It's easier to tell a poor person, 'You know what, you are poor, you're hungry because the other one has taken away your rights`,
        person:`Paul Kagame`,
    },
    {
        quote:`I cannot recognise either the Palestinian state or the Israeli state. The Palestinians are idiots and the Israelis are idiots`,
        person:`Muammar gaddafi`,
    },
    {
        quote:`If you're walking down the right path and you're willing to keep walking, eventually you'll make progress`,
        person:`barack obama`,
    },
    {
        quote:`I am going to stop calling you a white man and I'm going to ask you to stop calling me a black man`,
        person:`morgan freeman`,
    },
    {
        quote:`I don't have to show anything to anyone. There is nothing to prove`,
        person:`cristiano ronaldo`,
    },
    {
        quote:`Reality is wrong. Dreams are for real.`,
        person:`2pac Shackul`,
    },
    {
        quote:`I’m not perfect, but I ll always be real`,
        person:`2pac Shackul`,
    }
    

];





viewOtherQuote.addEventListener('click',function(){

    const random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;

});


viewQuote.addEventListener('click',function(){

   
    sectionOne.style.display = 'block';
    container.style.display = 'none';
});

btnClose.addEventListener('click',function(){
    sectionOne.style.display = 'none';
    container.style.display = 'block';
})




