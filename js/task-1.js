import galleryItems from './gallery-items.js';

const galleryImages = document.querySelector('.gallery');
const addImagesLink = galleryItems.map((galleryItem) => {
    const addGalleryImgList = document.createElement('li');
    addGalleryImgList.classList.add('gallery__item');
    addGalleryImgList.insertAdjacentHTML(
        'beforeend',
        `<a class="gallery__link" href="${galleryItem.original}">
        <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}">
        </a>`
    );
    return addGalleryImgList;
});

galleryImages.append(...addImagesLink);

// modal window

const refs = {
    gallery: document.querySelector('.js-gallery'),
    largeImg: document.querySelector('.lightbox__image'),
    open: document.querySelector('.lightbox'),
    close: document.querySelector('.lightbox button[data-action="close-lightbox"]')
};

refs.gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const imgRef = event.target;
    const largeImgURL = imgRef.dataset.source;

    refs.largeImg.src = largeImgURL;
    refs.open.classList.add('is-open');
}

refs.close.addEventListener('click', closeModalWindow);

function closeModalWindow(event) {
    refs.open.classList.remove('is-open');
    refs.largeImg.removeAttribute('src');
}
