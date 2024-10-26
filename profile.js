function showPets() {
    const petGallery = document.getElementById("petGallery");
    petGallery.innerHTML = ""; // Clear previous content if any

    // Sample array of pet image URLs (replace with actual URLs if available)
    const petImages = [
        'cat.jpeg',
        'dogimage.jpeg',
        'hamster.jpeg',
        'horse.jpg',
        'parrot.jpeg',
        'piegon.jpg',
        'rabbit.jpeg',
        'tortoise.jpg'
    ];

    petImages.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Adopted Pet";
        petGallery.appendChild(img);
    });
}
