import { showPopUp } from "./showPopUp";

const footerForm = document.querySelector('.footer__form');

footerForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  let formDataObject = {};
  const formData = new FormData(footerForm);

  formData.forEach(function (value, key) {
    formDataObject[key] = value;
  });

  try {
    const response = await fetch('https://kind-jay-tank-top.cyclic.app/api', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(formDataObject)
    })

    let result = await response.json();

    if (response.ok) {
      showPopUp('ok')
      console.log(result)
    } else {
      throw new Error('Submit error')
    }
  } catch (e) {
    showPopUp('error')
    console.log(e)
  } finally {
    footerForm.reset();
  }
})
