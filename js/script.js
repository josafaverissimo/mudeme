const trackMe = {
	interface: {
		squares: document.querySelectorAll('div.squares > div[data-position]'),

		start() {
			this.squares.forEach(square => {
				const position = square.dataset.position;

				square.addEventListener('click', () => {
					const target = [0,1,2].filter(x => x != position)[(Math.floor(Math.random() * 2) + 1) - 1];

					console.log(position, target)

					trackMe.position.changePosition(position, target)
				})
			})
		}
	},

	position: {
		current: ['first', 'second', 'third'],

		changePosition(initial, final) {
			const square = trackMe.interface.squares[initial]
			const target = trackMe.interface.squares[final]			
			const initialPosition = this.current[initial]
			const finalPosition = this.current[final]

			square.classList.remove(...this.current)
			square.classList.add(finalPosition)

			target.classList.remove(...this.current)
			target.classList.add(initialPosition)

			this.current[initial] = finalPosition
			this.current[final] = initialPosition
		}
	}
}