//your JS code here. If required.
//select squares
const squares = document.querySelectorAll('.square');

squares.forEach((currentSquare)=>{
	//mouseenter
	currentSquare.addEventListener('mouseover', ()=>{
		squares.forEach((curr)=>{
			if(curr!==currentSquare){
				
			curr.style.backgroundColor = '#6F4E37'
			}
		})
	})

	currentSquare.addEventListener('mouseout', ()=>{
		squares.forEach((el)=>el.style.backgroundColor='#E6E6FA')
	})
})