const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click" , ()=>{

    addNote(); 
});



const noteSave = ()=>{
    
    const notes = document.querySelectorAll(".note textarea");
    
    const data = [];
    notes.forEach(
        (note)=>{
            data.push(note.value);
            
        }
        )

        if(data.length===0)
        {
            localStorage.removeItem("notes")
        }
        else{

            localStorage.setItem("notes" , JSON.stringify(data));
        }
    }
    
    const addNote = (text = "")=>{
        const note = document.createElement("div");
        
        note.classList.add("note");
        
        note.innerHTML = ` <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
        </div>
        <textarea>${text}</textarea>`;
        
        
        note.querySelector(".trash").addEventListener("click" , ()=>{
            note.remove();
            noteSave();
        })    
        
        note.querySelector(".save").addEventListener("click" , ()=>{
            noteSave();
        })

        note.querySelector("textarea").addEventListener(
            "focusout",
            ()=> {
                noteSave();}
        )
        main.appendChild(note);
        
        noteSave();
        
    }

    
    (
        function(){
            const lsNote = JSON.parse(localStorage.getItem("notes"));
            
            if(lsNote.length===null)
            {
                addNote();

            }
            else{

                lsNote.forEach(
                    (lsnote)=>{
                        addNote(lsnote);
    
                        
                    }
                    
                )
            }

        }
    )()