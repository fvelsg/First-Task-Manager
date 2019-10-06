const listElement = document.querySelector('#app ul')
            const inputElement = document.querySelector('#app input')
            const buttonElement = document.querySelector('#app button')

            let tasks = JSON.parse(localStorage.getItem('list_tasks')) ||[]
            function renderTasks () {
                listElement.innerHTML = ''
                for(task of tasks){
                    let taskElement = document.createElement('li')
                    let textElement = document.createTextNode(task)

                    let linkElement = document.createElement('a')
                    linkElement.setAttribute('href', '#')
                    let linkText = document.createTextNode('    ✖[DeleteTask]✖')
                    linkElement.appendChild(linkText)
                    let currentTaskPosition = tasks.indexOf(task)
                    linkElement.setAttribute('onclick', `deleteTask(${currentTaskPosition})`)
                    
                    taskElement.appendChild(textElement)
                    taskElement.appendChild(linkElement)
                    listElement.appendChild(taskElement)
                }
            }
            
            renderTasks()

            function addTask () {
                let textElement = inputElement.value
                
                tasks.push(textElement)
                
                inputElement.value = ''
                
                renderTasks()
                saveToStorage()
            }

            buttonElement.onclick = addTask

            function deleteTask (position) {
                tasks.splice(position, 1)
                renderTasks()
                saveToStorage()
            }

            function saveToStorage(){
                localStorage.setItem('list_tasks', JSON.stringify(tasks))
            }
