document.addEventListener('DOMContentLoaded', () => {
    const svgElement = document.getElementById('soda-can');
    const slider = document.getElementById('size-slider');

    slider.addEventListener('input', () => {
        let height = slider.value;
        let volume = 9000000;
        let radius = Math.sqrt(volume / (Math.PI * height));
        svgElement.style.width = `${radius * 2}px`;
        svgElement.style.height = `${height}px`;  // Keep the aspect ratio
    });
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function canAnimation () {
    isAnime = true;
    const svgElement = document.getElementById('soda-can');
    const initialVolume = 9000000; // Initial volume of the soda can
    const maxHeight = 700; // Maximum height for animation
    const minHeight = 150// Minimum height for animation
    const animationDuration = 2000; // Animation duration in milliseconds (2 seconds)
    const stepSize = 0.5; // Step size for height adjustment
while (isAnime){

    // Increase height animation
    for (let height = minHeight; height <= maxHeight; height += stepSize) {
        updateCanDimensions(svgElement, initialVolume, height);
        await sleep(animationDuration / (maxHeight - minHeight + 1));
        if(isAnime == false){
            return;
        }
    }

    // Decrease height animation
    for (let height = maxHeight; height >= minHeight; height -= stepSize) {
        updateCanDimensions(svgElement, initialVolume, height);
        await sleep(animationDuration / (maxHeight - minHeight + 1));
        if(isAnime == false){
            return;
    }
}
};

}

function stopAnime(){
    isAnime = false;
}
function updateCanDimensions(svgElement, volume, height) {
    const radius = Math.sqrt(volume / (Math.PI * height));
    svgElement.style.width = `${2 * radius}px`;
    svgElement.style.height = `${height}px`;
}


// canAnimation();    
