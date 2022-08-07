class Gallery {
    #cellWidth = 0;
    #cellHeight = 0;

    #galleryContainer = null;

    constructor (containerSelector = `[data-gallery]`) {
        this.#galleryContainer = document.querySelector(containerSelector);
        if (!this.#galleryContainer) {
            throw new Error('Container not found');
        }

        this.#rebuild();
    }

    #getImagesArray() {
        let imagesElArray = this.#galleryContainer.querySelectorAll('img');
        return imagesElArray;
    }

    #rebuild() {
        let imagesArray = this.#getImagesArray();
        let right = true;
        for (let imgIdx = 0; imgIdx < imagesArray.length;) {
            let col1El = document.createElement('div');
            col1El.classList.add('col-size-1')
            let col2El = document.createElement('div');
            col2El.classList.add('col-size-2')
            let newRow = document.createElement('div');

            if (right) {
                newRow.classList.add('row-layout-1-2');
                newRow.appendChild(col2El);
                newRow.appendChild(col1El);
                for (let colIdx = 0; imgIdx < imagesArray.length && colIdx < 3; colIdx++, imgIdx++) {
                    if (colIdx == 0) {
                        col2El.appendChild(imagesArray[imgIdx]);
                    } else {
                        col1El.appendChild(imagesArray[imgIdx]);
                    }
                }
                right = false;
            } else {
                newRow.classList.add('row-layout-2-1');
                newRow.appendChild(col1El);
                newRow.appendChild(col2El);
                for (let colIdx = 0; imgIdx < imagesArray.length && colIdx < 3; colIdx++, imgIdx++) {
                    if (colIdx == 0) {
                        col2El.appendChild(imagesArray[imgIdx]);
                    } else {
                        col1El.appendChild(imagesArray[imgIdx]);
                    }
                }
                right = true;
            }
            this.#galleryContainer.appendChild(newRow);

            newRow = document.createElement('div');
            newRow.classList.add('row-layout-3');
            for (let colIdx = 0; imgIdx < imagesArray.length && colIdx < 3; colIdx++, imgIdx++) {
                let col = document.createElement('div');
                col.classList.add('col-size-1');
                col.appendChild(imagesArray[imgIdx]);
                newRow.appendChild(col);
            }
            this.#galleryContainer.appendChild(newRow);

            newRow = document.createElement('div');
            newRow.classList.add('row-layout-3');
            for (let colIdx = 0; imgIdx < imagesArray.length && colIdx < 3; colIdx++, imgIdx++) {
                let col = document.createElement('div');
                col.classList.add('col-size-1');
                col.appendChild(imagesArray[imgIdx]);
                newRow.appendChild(col);
            }
            this.#galleryContainer.appendChild(newRow);
        }
    }
}