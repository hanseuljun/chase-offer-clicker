function clickAllOffers() {
    const elements = document.querySelectorAll('mds-icon');
    for (const element of elements) {
        element.click();
    }
}

clickAllOffers();