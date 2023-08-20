//adding functionality to the "realizacje" section

    const rozwin = document.getElementById('rozwin');

    //getting all the elements with the "hidden" property
    const sidewalk = document.getElementById('sidewalk');
    const view = document.getElementById('view');
    const terrace = document.getElementById('terrace');
    const fountain = document.getElementById('fountain');
    const gate = document.getElementById('gate');

    //elements with a blur property
    const roses = document.getElementById('roses');
    const koi = document.getElementById('koi');
    const pool = document.getElementById('pool');
    const patio = document.getElementById('patio');
    const yard = document.getElementById('yard');

    rozwin.addEventListener('click', () => {
        rozwin.innerText==='Zwiń' ? addAll() : removeAll();
    });

    // a function which removes the "hidden" & "blur" properties from the images 
    // and changes the "activate" status which is necessary for the gallery pop-up
    function removeAll() {
        sidewalk.classList.remove('hidden');
        view.classList.remove('hidden');
        terrace.classList.remove('hidden');
        fountain.classList.remove('hidden');
        gate.classList.remove('hidden');
        roses.classList.remove('lg:blur-sm');
        koi.classList.remove('md:blur-sm');
        pool.classList.remove('blur-sm');
        patio.classList.remove('blur-sm');
        yard.classList.remove('blur-sm');
        rozwin.innerText = 'Zwiń';

        activate = true;
    };

    // a function that adds the "hidden" and "blur" properties to the images
    // and changes the "activate" status which is necessary for the gallery pop-up
    function addAll() {
        sidewalk.classList.add('hidden');
        view.classList.add('hidden');
        terrace.classList.add('hidden');
        fountain.classList.add('hidden');
        gate.classList.add('hidden');
        roses.classList.add('lg:blur-sm');
        koi.classList.add('md:blur-sm');
        pool.classList.add('blur-sm');
        patio.classList.add('blur-sm');
        yard.classList.add('blur-sm');
        rozwin.innerText = 'Rozwiń'

        activate = false; 
    };


//adding some scrolling options to the page

    const real1 = document.getElementById('real1');
    const real2 = document.getElementById('real2');
    const real3= document.getElementById('real3');
    const real4= document.getElementById('real4');
    const firma = document.getElementById('firma');
    const contBtn = document.getElementById('contBtn');
    const contBtn2 = document.getElementById('contBtn2');
    const contBtn3 = document.getElementById('contBtn3');

    const realizacjeBlock = document.getElementById('realizacjeBlock');
    const oFirmie = document.getElementById('oFirmie');
    const contactBlockSM = document.getElementById('contactBlockSM');
    const contactBlockL = document.getElementById('contactBlockL');

    real1.addEventListener('click', () => {
        realizacjeBlock.scrollIntoView({behavior:"smooth"});
    });

    real2.addEventListener('click', () => {
        realizacjeBlock.scrollIntoView({behavior:"smooth"});
    });

    real3.addEventListener('click', () => {
        realizacjeBlock.scrollIntoView({behavior:"smooth"});
    });

    real4.addEventListener('click', () => {
        realizacjeBlock.scrollIntoView({behavior:"smooth"});
    });

    firma.addEventListener('click', () => {
        oFirmie.scrollIntoView({behavior:"smooth"});
    });

    contBtn.addEventListener('click', () => {
        contactBlockSM.scrollIntoView({behavior:"smooth"});
        if (!!contactBlockSM){
            contactBlockL.scrollIntoView({behavior:"smooth"});
        };
    });

    contBtn2.addEventListener('click', () => {
        contactBlockSM.scrollIntoView({behavior:"smooth"});
        if (!!contactBlockSM){
            contactBlockL.scrollIntoView({behavior:"smooth"});
        };
    });

    contBtn3.addEventListener('click', () => {
        contactBlockSM.scrollIntoView({behavior:"smooth"});
        if (!!contactBlockSM){
            contactBlockL.scrollIntoView({behavior:"smooth"});
        };
    });


//animating the carousel in the "hero" section 

    //dom elements
    const rightBtn = document.getElementById('rightBtn');
    const leftBtn = document.getElementById('leftBtn');

    //an array that contains the photos

    var i = 0;
    var img = document.getElementById('img');
    img.src = './images/hedge.jpg';

    var array = ['./images/hedge.jpg', './images/maze2.jpg', './images/maze3.jpg']

    function next() {
        if(i == 2){
            i = 0;
        }
        i++;
        img.src = array[i];
    };

    function back() {
        if(i == 0){
            i = 2;
        }
        i--;
        img.src = array[i]
    };

    //adding clickEvents 

    rightBtn.addEventListener('click', () => {
        next();
    });

    leftBtn.addEventListener('click', () => {
        back(); 
    });



//adding a pop-up gallery to the "realizacje" section 

    // Get the modal by id
    var modal = document.getElementById("modal");

    // Get the modal image tag
    var modalImg = document.getElementById("modal-img");

    //this is a global variable that is altered by the "addAll()" and "removeAll()"
    // functions, this way the popup gallery only opens after someone click the "rozwin" button
    let activate = '';

    // this function is called when a small image is clicked
    function showModal(src) {
        if(activate ==true){
            modal.classList.remove('hidden');
            modalImg.src = src;
        } else {
            return
        }        
    };

    // this function is called when the close button is clicked
    function closeModal() {
        modal.classList.add('hidden');
    }
    

