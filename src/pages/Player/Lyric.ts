const synchronized = true;

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
        loading.textContent = "LOADING_LYRICS";
		container.appendChild(loading);
		loading.scrollIntoView({
			inline: "center",
			block: "center",
			behavior: "smooth"
		});
		return;
	}

	document.documentElement.classList.remove("no-lyrics");
    // KARAOKE.LYRICS.SETTINGS
    interface Line{
        number: number;
        startTime: number;
        finishTime: number;
        texto: string;
    }
	for (let lineIndex = 0; lineIndex < subtitles!.length; lineIndex++) {
		const line:Line = subtitles![lineIndex];
		const elem = document.createElement("span");
		elem.classList.add("line");
        
		if (line.texto) {
			if ( line.number && subtitles.advance) {
				/* LOGICA PARA SUBTITULOS AVANZADOS */
			} else
				elem.textContent = line.texto;

			if (
				!document.documentElement.classList.contains("no-clickable-lyrics") &&
				!document.documentElement.classList.contains("non-interactive") 
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
}

export function updateActiveLyrics(elapsed: number, subtitles: any) {
    const container = document.getElementById("lyrics")!;
	if (!synchronized)
		return;

	container.classList.add("synchronized");

	// GET THE CURRENT LINE
    let lineIndex = subtitles.length - 1;
	for (let i = -1; i < subtitles.length; i++) {
		// @ts-ignore
		if (elapsed *1000 < subtitles[i + 1]?.tiempoInicio) {
			lineIndex = i;
			break;
		}
	}

	for (let i = 0; i < container.children.length; i++) {
		const line = container.children[i] as HTMLElement;
		if (i === lineIndex){

			line.removeAttribute("distance");
			line.classList?.add("active");
		}else{
			const distance = Math.max(-4, Math.min(i - lineIndex, 4));
			line.setAttribute("distance", `${distance}`);
			line.classList?.remove("active");
		}
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
			// @ts-ignore
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