

const seekbarWhole = document.getElementById("seekbar")!;
const seekbarFg = document.getElementById("seekbar-fg")!;
const seekbarBall = document.getElementById("seekbar-ball")!;
const songdata = {
    metadata: {
        id: "1",
        length: 0
    },
    reportsPosition: false,
    capabilities: {
        canSeek: true
    }
};
seekbarWhole.onclick = seekTo;


seekbarWhole.onmousedown = (e) => {
	e.preventDefault();

	if(seekbarWhole.classList.contains("draggable")){
		seekbarWhole.onmousemove = (e) => {
			e.preventDefault();
			const rect = seekbarWhole.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const percentage = Math.round(x / rect.width * 100);
			seekbarFg.classList.add("dragging");
			seekbarFg.style.width = percentage + "%";
			seekbarBall.style.left = percentage + "%";
		};

		seekbarWhole.onmouseup = (e) => {
			seekbarWhole.onmouseup = null;
			seekbarWhole.onmousemove = null;
			seekbarWhole.onmouseleave = null;
			seekbarWhole.classList.remove("dragging");
			seekTo(e);
		};

		seekbarWhole.onmouseleave = () => {
			seekbarWhole.onmouseup = null;
			seekbarWhole.onmousemove = null;
			seekbarWhole.onmouseleave = null;
			seekbarFg.classList.remove("dragging");
		};
	}
};

function seekTo(e) {
	const rect = seekbarWhole.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const percentage = x / rect.width;
    // Cambiar el tiempo de la cancion
    // AQUI SE DEBE CAMBIAR EL TIEMPO DE LA CANCION => REPRODUCTOR
	// window.np.seek(percentage);
}

// Actualizar el estado de la barra => ACTIVAR CUANDO SE REPRODUZCA LA CANCION
export function updateSeekbarStatus() {
	if(songdata.capabilities.canSeek)
		seekbarWhole.classList.add("draggable");
	else
		seekbarWhole.classList.remove("draggable");
}

// Actualizar el tiempo de la barra => ACTIVAR CUANDO SE REPRODUZCA LA CANCION
export function updateSeekbarTime(elapsed: number) {
	// if (!songdata.metadata.id)
	// 	return;

	// if(songdata.reportsPosition)
	// 	document.documentElement.classList.remove("not-reporting-position");
	// else
	// 	document.documentElement.classList.add("not-reporting-position");
    // CAMBIAR LA BARRA DE TIEMPO Y LA BOLA
	const seekbarPercent = Math.max(0, Math.min(100, elapsed / songdata.metadata.length * 100));
	if (!seekbarFg.classList.contains("dragging")){
		seekbarFg!.style.width = `${seekbarPercent}%`;
		seekbarBall!.style.left = `${seekbarPercent}%`;
	}
}