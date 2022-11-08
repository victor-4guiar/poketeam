import style from './Team.module.css';

function Team({names}){
	let teamcon = document.createElement('div');
	teamcon.setAttribute('id', 'team_container');
	teamcon.classList.add(`${style.team_container}`);
	document.body.appendChild(teamcon);
	
	for(let c=0;c<names.length;c++){
		let pokecontainer = document.createElement('div');
		pokecontainer.setAttribute('id', `pokemon([c])`);
		pokecontainer.classList.add('pokecontainer');
		pokecontainer.innerHTML = `
			<p>${names[c]}</p>
		`;
		teamcon.appendChild(pokecontainer);
	}
}

export default Team;