import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import './render-button.css';

export const renderButtons = (element) => {
    
    const nextButton = document.createElement('button')
    nextButton.innerText = ' next > ';
    nextButton.classList.add('green-button');

    const prevButton = document.createElement('button')
    prevButton.innerText = ' < prev ';
    prevButton.classList.add('red-button');

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    element.append(prevButton, currentPageLabel, nextButton);

    nextButton.addEventListener('click', async() => {
       await usersStore.loadNextPage();
       currentPageLabel.innerText = usersStore.getCurrentPage();
       renderTable(element)
    });

    prevButton.addEventListener('click', async() => {
       await usersStore.loadPreviousPage();
       currentPageLabel.innerText = usersStore.getCurrentPage();
       renderTable(element)
    });

    
}