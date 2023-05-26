const saveInfo = [
    
]

const input = document.querySelector('input')
const textarea = document.querySelector('textarea')
const addFeedback = document.querySelector('.addFeedback')
const btn = document.querySelector('button')

const takeFeedback = () => {
    if(input.value.length > 0 && textarea.value.length > 0) {
        saveInfo.push(
            {
                name: input.value,
                feedback: textarea.value
            },
        )

        addFeedback.innerHTML = ''

        saveInfo.forEach(element => {
            const addFeedbackElement = () => {
                addFeedback.innerHTML += `
                <div class="block">
                <p class="name">${element.name}</p>
                <p class="description">${element.feedback}</p>
                </div>
                `
            }
            addFeedbackElement()
        })        

    } else {
        alert("Please enter something")
    }
}

btn.addEventListener("click", takeFeedback)