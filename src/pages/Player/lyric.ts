
// VAROABLES TEMPORALES
// const container = document.getElementById("lyrics")!;

const synchronized = true;
// let isContainerHovered: boolean, animateStatus: { invalidated: boolean; completed: boolean; } | undefined;

export function putLyricsInPlace(subtitles: any ) {
    const container = document.getElementById("lyrics")!;
	// remove all children of container
	container.classList.remove("synchronized");
    while (container.firstChild) container.removeChild(container.lastChild!);

	// LOADING LYRICS
	if (!subtitles){
		document.documentElement.classList.add("no-lyrics");

		const loading = document.createElement("span");
		loading.classList.add("line");
		// loading.textContent = lang.LOADING_LYRICS;
        loading.textContent = "LOADING_LYRICS";
		container.appendChild(loading);
		loading.scrollIntoView({
			inline: "center",
			block: "center",
			behavior: "smooth"
		});
		return;
	}

	// NO LYRICS => AJUSTAR
	// if (karaoke.lyrics.settings) {
	// 	document.documentElement.classList.add("no-lyrics");
	// 	const noLyrics = document.createElement("span");
	// 	noLyrics.classList.add("line");
	// 	// noLyrics.textContent = lang.NO_LYRICS;
    //     noLyrics.textContent = 'NO_LYRICS';
	// 	container.appendChild(noLyrics);
	// 	noLyrics.scrollIntoView({
	// 		inline: "center",
	// 		block: "center",
	// 		behavior: "smooth"
	// 	});
	// 	return;
	// }

	// lyrics! => BORRAR
	document.documentElement.classList.remove("no-lyrics");

    // PUT LYRICS IN PLACE
    // const subtitles = karaoke.lyrics.lines; // BORRAR YA EXISTE EN KARAOKE
    // KARAOKE.LYRICS.SETTINGS
    interface Line{
        number: number;
        startTime: number;
        finishTime: number;
        texto: string;
    }
	for (let lineIndex = 0; lineIndex < subtitles!.length; lineIndex++) {
		const line:Line = subtitles![lineIndex];// TAMBIEN PUEDE SER SUBTITLES.NUMBER
		const elem = document.createElement("span");
		elem.classList.add("line");
        
		if (line.texto) {
			if ( line.number && subtitles.advance) {// CREO QUE SE PUEDE BORRAR
                /* LOGICA PARA QUE FUNCIONES CON PALABRAS */
				// for (let verseIndex = 0; verseIndex < subtitles.length; verseIndex++) {
                //     // TOTAL DE PALABRAS
				// 	const verse = line.texto[verseIndex];
                //     console.log('LINE NUMBER: ',line.texto)
				// 	// const duration = Math.max(
				// 	// 	0.1,
				// 	// 	(
				// 	// 		subtitles[verseIndex + 1]?.startTime ||
				// 	// 		(line.duration ? line.time! + line.duration! : undefined) ||
				// 	// 		songdata.lyrics.lines![lineIndex + 1]?.time! ||
				// 	// 		songdata.metadata.length
				// 	// 	) - verse.start
				// 	// );
				// 	const duration = line.finishTime - line.startTime;
				// 	const span = document.createElement("span");
				// 	span.textContent = line.texto;
				// 	span.style.setProperty("--word-duration", `${duration}s`);

				// 	if (line.text.trim().length) {
				// 		span.classList.add("word");

				// 		if (
				// 			!document.documentElement.classList.contains("no-clickable-lyrics") &&
				// 			!document.documentElement.classList.contains("non-interactive")
				// 		) {
				// 			span.addEventListener("click", event => {
				// 				event.stopPropagation();
                //                 // LOGICA PARA REPRODUCIR LA CANCION DESDE EL VERSO SELECCIONADO
				// 				// window.np.setPosition(verse.start);
				// 			});
				// 		}
				// 	}

				// 	elem.appendChild(span);
                // }
			} else
				elem.textContent = line.texto;

			if (
				!document.documentElement.classList.contains("no-clickable-lyrics") &&
				!document.documentElement.classList.contains("non-interactive") 
				//&& line.time
			) {
				elem.addEventListener("click", event => {
					event.stopPropagation();
					// LOGICA PARA REPRODUCIR LA CANCION DESDE EL VERSO SELECCIONADO
                    console.log('CLICK EN EL VERSO: ',line)
				});
			}

		} else {
			elem.classList.add("empty");
			const emptyProgress = document.createElement("div");
			emptyProgress.classList.add("empty-progress");
			elem.appendChild(emptyProgress);
		}
		
		container.appendChild(elem);
	}

	// SYNCHRONIZED FLAG => VER QUE HACER CON ESTO
	// if(songdata.lyrics.synchronized && songdata.reportsPosition)
	// 	container.classList.add("synchronized");
}

export function updateActiveLyrics(elapsed: number, subtitles: any) {
    const container = document.getElementById("lyrics")!;
	if (!synchronized)
		return;

	container.classList.add("synchronized");

	// we get the active line
	// let lineIndex = songdata.lyrics.lines!.length - 1;
    let lineIndex = subtitles.length - 1;
	for (let i = -1; i < subtitles.length; i++) {
        // console.log('MILISEGUNDOS TRANSCURRIDOS: '+elapsed *1000 + ' - ' + subtitles[i + 1]?)
		// @ts-ignore
		if (elapsed *1000 < subtitles[i + 1]?.tiempoInicio) {
			lineIndex = i;
            console.log('CAMBIO DE LINEA: ',lineIndex)
			break;
		}
	}
    console.log('SEGUNDOS TRANSCURIDOS: ',elapsed)
    console.log('LINE ACTIVE: ',lineIndex)
	const wasActiveBefore = container.children[lineIndex]?.classList?.contains("active");

	for (let i = 0; i < container.children.length; i++) {
		const line = container.children[i] as HTMLElement;
		if (i === lineIndex){

			// if(config.karaoke){
			// 	for (let i = 0; i < line.children.length; i++) {
			// 		const word = line.children[i] as HTMLElement;
			// 		if(i <= wordIndex){
			// 			if (word.classList?.contains("word"))
			// 				word.classList?.add("active");
			// 		}else{
			// 			if (word.classList?.contains("word"))
			// 				word.classList?.remove("active");
			// 		}
			// 	}
			// }

			// if(line.classList.contains("empty")){
			// 	// determine empty progress
			// 	const emptyProgress = [...line.children].find(x => x.classList.contains("empty-progress")) as HTMLElement;

			// 	const percentageToGo = (elapsed - subtitles![i].startTime!) / ((subtitles![i + 1]?.time) - subtitles![i].startTime!);// EN TEORIA DEBERIA SER TIME QUE NO EXISTE
			// 	emptyProgress.style.setProperty("--waitTime", `${percentageToGo}`);
			// }

			line.removeAttribute("distance");
			line.classList?.add("active");
		}else{
			const distance = Math.max(-4, Math.min(i - lineIndex, 4));
			line.setAttribute("distance", `${distance}`);
			line.classList?.remove("active");

			// if(config.karaoke){
			// 	for (let i = 0; i < line.children.length; i++) {
			// 		const word = line.children[i] as HTMLElement;
			// 		if(word.classList.contains("word"))
			// 			word.classList?.remove("active");
			// 	}
			// }
		}
	}

	// now we animate the active into view
	if (!wasActiveBefore ) {//&& !isContainerHovered
		// invalidate previous animation
		// if(animateStatus)
		// 	animateStatus.invalidated = true;

		// call new animation
		// animateStatus = animateScroll(container.children[lineIndex] as HTMLElement);
	}
}

export function reCenter() {
    const container = document.getElementById("lyrics")!;
    container.getElementsByClassName("line active")[0]?.scrollIntoView({
        inline: "center",
        block: "center",
        behavior: "auto"
    })
}

// container.addEventListener("mouseenter", () => isContainerHovered = true);
// container.addEventListener("mouseleave", () => {
// 	isContainerHovered = false;
// 	reCenter();
// });

// window.np.registerLyricsCallback!(() => {
// 	putLyricsInPlace();
// });

// ESTAS FUNCIONES PODRIAN IR EN UN ARCHIVO UTILS
export function animateScroll(element: HTMLElement, duration: number = 500) {
	if(!element) return;

	const parent = element.parentElement;
	if(!parent) return;

	let start: number;

	const begin = parent.scrollTop;
	const goal = ((element.offsetTop - parent.offsetTop) + (element.offsetHeight / 2)) - (parent.offsetHeight / 2);

	const status = {
		invalidated: false,
		completed: false
	};

	function step(timestamp: number){
		if (start === undefined)
			start = timestamp;

		const elapsedTimestamp = timestamp - start;
		const elapsed = Math.min(1, elapsedTimestamp / duration);
		const easing = (t: number) => 1 + --t * t * t * t * t;
		const timed = easing(elapsed);

		const target = begin * (1 - timed) + goal * timed;

		if (elapsed >= 1 || parent!.matches(`${parent!.nodeName}:hover`) || status.invalidated) {
			status.completed = true;
			return;
		}

		parent!.scrollTo({
			top: target,
			// @ts-ignore wtffff
			behavior: "instant"
		});

		window.requestAnimationFrame(step);
	}

	window.requestAnimationFrame(step);
	return status;
}


export function fullscreen() {
	// @ts-ignore
	if (document.fullscreenElement || document.webkitFullscreenElement){
		if (document.exitFullscreen)
			document.exitFullscreen();
		// @ts-ignore
		else if (document.webkitExitFullscreen)
			// @ts-ignore
			document.webkitExitFullscreen();
	} else {
		if (document.documentElement.requestFullscreen)
			document.documentElement.requestFullscreen();
		// @ts-ignore
		else if (document.documentElement.webkitRequestFullscreen)
			// @ts-ignore
			document.documentElement.webkitRequestFullscreen();
	}
}