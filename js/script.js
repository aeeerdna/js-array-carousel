console.log('JS OK!!!')

// array img
const imagesList = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

let activeImage = 0;
console.log(imagesList[activeImage]);

const imageContainer = document.querySelector('#img-container');
console.log(imageContainer);

const imageListContainer = document.querySelector('#img-list');
console.log(imageListContainer);

// new array inner.HTML
let activeImgHTML = '';
for (let i = 0; i < imagesList.length; i++) {
    console.log(imagesList[i]);
    console.log('image index', i, 'active index', activeImage);

    let classActiveName = '';
    if (i === activeImage) {
        classActiveName = ' active';
    }

    activeImgHTML += `<img class="item${classActiveName}" src="img/${imagesList[i]}" alt="${imagesList[i]}" />`
}

imageContainer.innerHTML = activeImgHTML;
imageListContainer.innerHTML = activeImgHTML;


// next button
const nextButton = document.getElementById('next-btn');

nextButton.addEventListener('click', function () {
    console.log('Clicked!!')

    if (activeImage > 0) {
        activeImage--;
    } else {
        activeImage = imagesList.length - 1;
    }

    let activeImgHTML = '';
    for (let i = 0; i < imagesList.length; i++) {
        console.log(imagesList[i]);
        console.log('image index', i, 'active index', activeImage);
        let classActiveName = '';
        if (i === activeImage) {
            classActiveName = ' active';
        }

        activeImgHTML += `<img class="item${classActiveName}" src="img/${imagesList[i]}" alt="${imagesList[i]}" />`
    }

    imageContainer.innerHTML = activeImgHTML;
    imageListContainer.innerHTML = activeImgHTML;
});



// previous button
const previousButton = document.getElementById('previous-btn');

previousButton.addEventListener('click', function () {
    console.log('Clicked!')

    if (activeImage < imagesList.length - 1) {
        activeImage++;
    } else {
        activeImage = 0;
    }


    let activeImgHTML = '';
    for (let i = 0; i < imagesList.length; i++) {
        console.log(imagesList[i]);
        console.log('image index', i, 'active index', activeImage);
        let classActiveName = '';
        if (i === activeImage) {
            classActiveName = ' active';
        }

        activeImgHTML += `<img class="item${classActiveName}" src="img/${imagesList[i]}" alt="${imagesList[i]}" />`
    }

    imageContainer.innerHTML = activeImgHTML;
    imageListContainer.innerHTML = activeImgHTML;

});