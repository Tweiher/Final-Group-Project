let allDogs = [];

const dogImages = {
"Affenpinscher" : "Images/affenpinscher.jpg",
"Afghan Hound" : "Images/Afghan-Hound.jpg",
"Airedale Terrier" : "Images/Airedale-Terrier.jpg",
"Akita" : "Images/Akita.jpg",
"Alaskan Klee Kai" : "Images/Alaskan-Klee-Kai.jpg",
"Alaskan Malamute": "Images/Alaskan-Malamute.jpg",
"American Bulldog" : "Images/American-Bulldog.jpg",
"American English Coonhound" : "Images/American-English-Coonhound.jpg",
"American Eskimo Dog" : "Images/American-Eskimo-Dog.jpg",
"American Foxhound" : "Images/American-Foxhound.jpg",
"American Hairless Terrier" : "Images/American-Hairless-Terrier.jpg",
"American Leopard Hound" : "Images/American-Leopard-Hound.jpg",
"American Staffordshire Terrier" : "Images/American-Staffordshire-Terrier.jpg",
"American Water Spaniel" : "Images/American-Water-Spaniel.jpg",
"Anatolian Shepherd Dog" : "Images/Anatolian-Shepherd-Dog.jpg",
"Appenzeller Sennenhund" : "Images/Appenzeller-Sennenhund.jpg",
"Australian Cattle Dog" : "Images/Australian-Cattle-Dog.jpg",
"Australian Kelpie" : "Images/Australian-Kelpie.jpg",
"Australian Shepherd" : "Images/Australian-Shepherd.jpg",
"Australian Stumpy Tail Cattle Dog" : "Images/Australian-Stumpy-Tail-Cattle-Dog.jpg",
"Australian Terrier" : "Images/Australian-Terrier.jpg",
"Azawakh" : "Images/Azawakh.jpg",
"Barbado da Terceira" : "Images/Barbado-da-Terceira.jpg",
"Barbet" : "Images/Barbet.jpg",
"Basenji" : "Images/Basenji.jpg",
"Basset Fauve de Bretagne" : "Images/Basset-Fauve-de-Bretagne.jpg",
"Basset Hound" : "Images/Basset-Hound.jpg",
"Bavarian Mountain Scent Hound" : "Images/Bavarian-Mountain-Scent-Hound.jpg",
"Bearded Collie" : "Images/Bearded-Collie.jpg",
"Beauceron" : "Images/Beauceron.jpg",
"Bedlington Terrier" : "Images/Bedlington-Terrier.jpg",
"Belgian-Laekenois" : "Images/Belgian-Laekenois.jpg",
"Belgian Malinois" : "Images/Belgian-Malinois.jpg",
"Belgian Sheepdog" : "Images/Belgian-Sheepdog.jpg",
"Belgian Tervuren" : "Images/Belgian-Tervuren.jpg",
"Bergamasco Sheepdog" : "Images/Bergamasco-Sheepdog.jpg",
"Berger Picard" : "Images/Berger-Picard.jpg",
"Bernese Mountain Dog" : "Images/Bernese-Mountain-Dog.jpg",
"Bichon Frise" : "Images/Bichon-Frise.jpg",
"Biewer Terrier" : "Images/Biewer-Terrier.jpg",
"Black and Tan Coonhound" : "Images/Black-and-Tan-Coonhound.jpg",
"Black Russian Terrier" : "Images/Black-Russian-Terrier.jpg",
"BloodHound" : "Images/Bloodhound.jpg",
"Bluetick Coonhound" : "Images/Bluetick-Coonhound.jpg",
"Boerboel" : "Images/Boerboel.jpg",
"Bohemian Shepherd" : "Images/Bohemian-Shepherd.jpg",
"Bolognese" : "Images/Bolognese.jpg",
"Border Collie" : "Images/Border-Collie.jpg",
"Border Terrier" : "Images/Border-Terrier.jpg",
"Borzoi" : "Images/Borzoi.jpg",
"Boston Terrier" : "Images/Boston-Terrier.jpg",
"Bouvier des Flandres" : "Images/Bouvier-des-Flandres.jpg",
"Boxer" : "Images/Boxer.jpg",
"Boykin Spaniel" : "Images/Boykin-Spaniel.jpg",
"Bracco Italiano" : "Images/Bracco-Italiano.jpg",
"Braque du Bourbonnais" : "Images/Braque-du-Bourbonnais.jpg",
"Braque Francais Pyrenean" : "Images/Braque-Francais-Pyrenean.jpg",
"Briard" : "Images/Briard.jpg",
"Brittany" : "Images/Brittany.jpg",
"Broholmer" : "Images/Broholmer.jpg",
"Brussels Griffon" : "Images/Brussels-Griffon.jpg",
"Bull Terrier" : "Images/Bull-Terrier.jpg",
"Bulldog" : "Images/Bulldog.jpg",
"Bullmastiff" : "Images/Bullmastiff.jpg",

};

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("categoryContainer");
    const searchInput = document.getElementById("searchInput");
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.getElementById("closeBtn");

    if (modal && closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.classList.add("hidden");
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.add("hidden");
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            filterDogs(e.target.value);
        });
    }

    if (container) {
        loadCategories(container);
    }
});

async function fetchDogs() {
    try {
        const res = await fetch("https://dogapi.dog/api/v2/breeds");

        if (!res.ok) throw new Error("API failed");

        const data = await res.json();
        return data.data;

    } catch (err) {
        console.error("Fetch error:", err);
        return [];
    }
}

async function loadCategories(container) {

    const dogs = await fetchDogs();
    allDogs = dogs;

    if (!dogs.length) {
        container.innerHTML = "<p>Failed to load dog data.</p>";
        return;
    }

    const groups = {};

    dogs.forEach(dog => {
        const letter = dog.attributes.name[0].toUpperCase();

        if (!groups[letter]) {
            groups[letter] = [];
        }

        groups[letter].push(dog);
    });

    container.innerHTML = "";

    Object.keys(groups).sort().forEach(letter => {

        const section = document.createElement("div");
        section.classList.add("card");

        section.innerHTML = `<h3>${letter}</h3>`;

        const grid = document.createElement("div");
        grid.classList.add("dog-grid");

        groups[letter]
            .sort((a, b) =>
                a.attributes.name.localeCompare(b.attributes.name)
            )
            .forEach(dog => {
                grid.appendChild(createDogCard(dog));
            });

        section.appendChild(grid);
        container.appendChild(section);
    });
}


function createDogCard(dog) {

    const card = document.createElement("div");
    card.classList.add("dogCard");

    const imgUrl = dogImages[dog.attributes.name];

    card.innerHTML = `
        <img src="${imgUrl}" alt="${dog.attributes.name}">
        <p>${dog.attributes.name}</p>
    `;

    card.addEventListener("click", async () => {
    try {
        const res = await fetch(`https://dogapi.dog/api/v2/breeds/${dog.id}`);
        const data = await res.json();

        openModal(data.data.attributes);

    } catch (err) {
        console.error("Failed to load breed details:", err);
    }
});

    return card;
}

function openModal(a) {

    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modalBody");

    modal.classList.remove("hidden");

    modalBody.innerHTML = `
        <h2>${a.name}</h2>
        <p><strong>Hypoallergenic:</strong> ${a.hypoallergenic ? "Yes" : "No"}</p>
        <p><strong>Description:</strong> ${a.description || "No description available."}</p>
    `;
}

function filterDogs(query) {
    const container = document.getElementById("categoryContainer");
    if (!container) return;

    const filtered = allDogs.filter(dog => 
        dog.attribues.name.toLowerCase().includes(query.toLowerCase())
    );

    container.innerHTML = "";

    filtered.forEach(dog => {
        container.appendChild(createDogCard(dog));
    });
}
