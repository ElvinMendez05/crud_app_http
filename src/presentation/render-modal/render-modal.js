import modalHtml from './render-modal.html?raw';
import { User } from '../../models/user';
import { getUserById } from '../../use-cases/get-user-by-id';
import './render-modal.css';

let modal, form;
let loadUser = {};

/**
 * 
 * @param {String|Number} id 
 * @returns 
 */

export const showModal = async(id) => {
    modal?.classList.remove('hide-modal');
    loadUser = {};

    if (!id) return;
    const user = await getUserById(id);
    setFormValues(user);
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}

const setFormValues = (user) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').value = user.isActive;
    loadUser = user;
}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike)=> Promise<void>} callback
 */

export const renderModal = (element, userCallback) => {

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');
    
    modal.addEventListener('click', (event) => {
        if (event.target.className === 'modal-container') {
            hideModal();
        }
    });

    form.addEventListener('submit', async(event) => {
        event.preventDefault() //previene el posteo por defecto 
        
        const formData = new FormData(form);
        const userLike = {...loadUser};

        for (const [key, value] of formData) {
            if (key === 'balance') {
                userLike[key] = +value; //+value es una conversion
                continue;
            }

            if (key === 'isActive') {
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }
        }
        
        await userCallback(userLike);

        hideModal();
    });

    element.append(modal);
}