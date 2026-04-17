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
"Bavarian Mountain Scent Houn" : "Images/Bavarian-Mountain-Scent-Hound.jpg",
"Beagle" : "Images/Beagle.jpg",
"Bearded Collie" : "Images/Bearded-Collie.jpg",
"Beauceron" : "Images/Beauceron.jpg",
"Bedlington Terrier" : "Images/Bedlington-Terrier.jpg",
"Belgian Laekenois" : "Images/Belgian-Laekenois.jpg",
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
"Bloodhound" : "Images/Bloodhound.jpg",
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
"Cairn Terrier" : "Images/Cairn-Terrier.webp",
"Canaan Dog" : "Images/Canaan-Dog.jpg",
"Cane Corso" : "Images/Cane-Corso.jpg",
"Cardigan Welsh Corgi" : "Images/Cardigan-Welsh-Corgi.jpg",
"Carolina Dog" : "Images/Carolina-Dog.jpg",
"Catahoula Leopard Dog" : "Images/Catahoula-Leopard-Dog.jpg",
"Caucasian Shepherd Dog" : "Images/Caucasian-Shepherd-Dog.jpg",
"Cavalier King Charles Spaniel" : "Images/Cavalier-King-Charles-Spaniel.jpg",
"Central Asian Shepherd Dog" : "Images/Central-Asian-Shepherd-Dog.jpg",
"Cesky Terrier" : "Images/Cesky-Terrier.jpg",
"Chesapeake Bay Retriever" : "Images/Chesapeake-Bay-Retriever.jpg",
"Chihuahua" : "Images/Chihuahua.jpg",
"Chinese Crested" : "Images/Chinese-Crested.jpg",
"Chinese Shar-Pei" : "Images/Chinese-Shar-Pei.jpg",
"Chinook" : "Images/Chinook.jpg",
"Chow Chow" : "Images/Chow-Chow.jpg",
"Cirneco dell'Etna" : "Images/Cirneco-dell'Etna.jpg",
"Clumber Spaniel" : "Images/Clumber-Spaniel.jpg",
"Cocker Spaniel" : "Images/Cocker-Spaniel.jpg",
"Collie" : "Images/Collie.jpg",
"Coton de Tulear" : "Images/Cotton-de-Tulear.jpg",
"Croatian Sheepdog" : "Images/Croatian-Sheepdog.jpg",
"Curly-Coated Retriever" : "Images/Curly-Coated-Retriever.jpg",
"Czechoslovakian Vlcak" : "Images/Czechoslovakian-Vlcak.jpg",
"Dachshund" : "Images/Dachsund.jpg",
"Dalmatian" : "Images/Dalmatian.jpg",
"Dandie Dinmont Terrier" : "Images/Dandie Dinmont Terrier.jpg",
"Danish-Swedish Farmdog" : "Images/Danish Swedish Farmdog.jpg",
"Deutscher Wachtelhund" : "Images/Deutscher Wachtelhund.jpg",
"Doberman Pinscher" : "Images/Doberman Pinscher.jpg",
"Dogo Argentino" : "Images/Dogo Argentino.jpg",
"Dogue de Bordeaux" : "Images/Dogue de Bordeaux.jpg",
"Drentsche Patrijshond" : "Images/Drentsche Patrijshond.jpg",
"Drever" : "Images/Drever.jpg",
"Dutch Shepherd" : "Images/Dutch Shepherd.jpg",
"English Cocker Spaniel" : "Images/English Cocker Spaniel.jpg",
"English Foxhound" : "Images/English Foxhound.jpg",
"English Setter" : "Images/English Setter.jpg",
"English Springer Spaniel" : "Images/English Springer Spaniel.jpg",
"English Toy Spaniel" : "Images/English Toy Spaniel.jpg",
"Entlebucher Mountain Dog" : "Images/Entlebucher Mountain Dog.jpg",
"Estrela Mountain Dog" : "Images/Estrela Mountain Dog.jpg",
"Eurasier" : "Images/Eurasier.jpg",
"Field Spaniel" : "Images/Field Spaniel.jpg",
"Finnish Lapphund" : "Images/Finnish Lapphund.jpg",
"Finnish Spitz" : "Images/Finnish Spitz.jpg",
"Flat-Coated Retriever" : "Images/Flat-Coated Retriever.jpg",
"French Bulldog" : "Images/French Bulldog.jpg",
"French Spaniel" : "Images/French Spaniel.jpg",
"German Longhaired Pointer" : "Images/German Longhaired Pointer.jpg",
"German Pinscher" : "Images/German Pinscher.jpg",
"German Shepherd Dog" : "Images/German Shepherd.jpg",
"German Shorthaired Pointer" : "Images/German Shorthaired Pointer.jpg",
"German Spitz" : "Images/German Spitz.jpg",
"German Wirehaired Pointer" : "Images/German Wirehaired Pointer.jpg",
"Giant Schnauzer" : "Images/Giant Schnauzer.jpg",
"Glen of Imaal Terrier" : "Images/Glen of Imaal Terrier.jpg",
"Golden Retriever" : "Images/Golden Retriever.jpg",
"Gordon Setter" : "Images/Gordon Setter.jpg",
"Grand Basset Griffon Vendéen" : "Images/Grand Basset Griffon Vendéen.jpg",
"Great Dane" : "Images/Great Dane.jpg",
"Great Pyrenees" : "Images/Great Pyrenees.jpg",
"Greater Swiss Mountain Dog" : "Images/Greater Swiss Mountain Dog.jpg",
"Greyhound" : "Images/Greyhound.jpg",
"Hamiltonstovare" : "Images/Hamiltonstovare.jpg",
"Hanoverian Scenthound" : "Images/Hanoverian Scenthound.jpg",
"Harrier" : "Images/Harrier.jpg",
"Havanese" : "Images/Havanese.jpg",
"Hokkaido" : "Images/Hokkaido.jpg",
"Hovawart" : "Images/Hovawart.jpg",
"Ibizan Hound" : "Images/Ibizan Hound.jpg",
"Icelandic Sheepdog" : "Images/Icelandic Sheepdog.jpg",
"Irish Red and White Setter" : "Images/Irish Red and White Setter.jpg",
"Irish Setter" : "Images/Irish Setter.jpg",
"Irish Terrier" : "Images/Irish Terrier.jpg",
"Irish Water Spaniel" : "Images/Irish Water Spaniel.jpg",
"Irish Wolfhound" : "Images/Irish Wolfhound.jpg",
"Italian Greyhound" : "Images/Italian Greyhound.jpg",
"Jagdterrier" : "Images/Jagdterrier.jpg",
"Japanese Akitainu" : "Images/Japanese Akitainu.jpg",
"Japanese Chin" : "Images/Japanese Chin.jpg",
"Japanese Spitz" : "Images/Japanese Spitz.jpg",
"Japanese Terrier" : "Images/Japanese Terrier.jpg",
"Jindo" : "Images/Jindo.jpg",
"Kai Ken" : "Images/Kai Ken.jpg",
"Karelian Bear Dog" : "Images/Karelian Bear Dog.jpg",
"Keeshond" : "Images/Keeshond.jpg",
"Kerry Blue Terrier" : "Images/Kerry Blue Terrier.jpg",
"Kishu Ken" : "Images/Kishu Ken.jpg",
"Komondor" : "Images/Komondor.jpg",
"Kromfohrlander" : "Images/Kromfohrlander.jpg",
"Kuvasz" : "Images/Kuvasz.jpg",
"Labrador Retriever" : "Images/Labrador Retriever.jpg",
"Lagotto Romagnolo" : "Images/Lagotto Romagnolo.jpg",
"Lakeland Terrier" : "Images/Lakeland Terrier.jpg",
"Lancashire Heeler" : "Images/Lancashire Heeler.jpg",
"Lapponian Herder" : "Images/Lapponian Herder.jpg",
"Leonberger" : "Images/Leonberger.jpg",
"Lhasa Apso" : "Images/Lhasa Apso.jpg",
"Löwchen" : "Images/Löwchen.jpg",
"Maltese" : "Images/Maltese.jpg",
"Manchester Terrier (Standard)" : "Images/Manchester Terrier (Standard).jpg",
"Manchester Terrier (Toy)" : "Images/Manchester Terrier (Toy).jpg",
"Mastiff" : "Images/Mastiff.jpg",
"Miniature American Shepherd" : "Images/Miniature American Shepherd.jpg",
"Miniature Bull Terrier" : "Images/Miniature Bull Terrier.jpg",
"Miniature Pinscher" : "Images/Miniature Pinscher.jpg",
"Miniature Schnauzer" : "Images/Miniature Schnauzer.jpg",
"Mountain Cur" : "Images/Mountain Cur.jpg",
"Mudi" : "Images/Mudi.jpg",
"Neapolitan Mastiff" : "Images/Neapolitan Mastiff.jpg",
"Nederlandse Kooikerhondje" : "Images/Nederlandse Kooikerhondje.jpg",
"Newfoundland" : "Images/Newfoundland.jpg",
"Norfolk Terrier" : "Images/Norfolk Terrier.jpg",
"Norrbottenspets" : "Images/Norrbottenspets.jpg",
"Norwegian Buhund" : "Images/Norwegian Buhund.jpg",
"Norwegian Elkhound" : "Images/Norwegian Elkhound.jpg",
"Norwegian Lundehund" : "Images/Norwegian Lundehund.jpg",
"Norwich Terrier" : "Images/Norwich Terrier.jpg",
"Nova Scotia Duck Tolling Retriever" : "Images/Nova Scotia Duck Tolling Retriever.jpg",
"Old English Sheepdog" : "Images/Old English Sheepdog.jpg",
"Otterhound" : "Images/Otterhound.jpg",
"Papillon" : "Images/Papillon.jpg",
"Parson Russell Terrier" : "Images/Parson Russell Terrier.jpg",
"Pekingese" : "Images/Pekingese.jpg",
"Pembroke Welsh Corgi" : "Images/Pembroke Welsh Corgi.jpg",
"Perro de Presa Canario" : "Images/Perro de Presa Canario.jpg",
"Peruvian Inca Orchid" : "Images/Peruvian Inca Orchid.jpg",
"Petit Basset Griffon Vendéen" : "Images/Petit Basset Griffon Vendéen.jpg",
"Pharaoh Hound" : "Images/Pharaoh Hound.jpg",
"Plott" : "Images/Plott.jpg",
"Pointer" : "Images/Pointer.jpg",
"Polish Lowland Sheepdog" : "Images/Polish Lowland Sheepdog.jpg",
"Pomeranian" : "Images/Pomeranian.jpg",
"Poodle (Miniature)" : "Images/Poodle (Miniature).jpg",
"Poodle (Standard)" : "Images/Poodle (Standard).jpg",
"Poodle (Toy)" : "Images/Poodle (Toy).jpg",
"Porcelaine" : "Images/Porcelaine.jpg",
"Portuguese Podengo" : "Images/Portuguese Podengo.jpg",
"Portuguese Podengo Pequeno" : "Images/Portuguese Podengo Pequeno.jpg",
"Portuguese Pointer" : "Images/Portuguese Pointer.jpg",
"Portuguese Sheepdog" : "Images/Portuguese Sheepdog.jpg",
"Portuguese Water Dog" : "Images/Portuguese Water Dog.jpg",
"Pudelpointer" : "Images/Pudelpointer.jpg",
"Pug" : "Images/Pug.jpg",
"Puli" : "Images/Puli.jpg",
"Pumi" : "Images/Pumi.jpg",
"Pyrenean Mastiff" : "Images/Pyrenean Mastiff.jpg",
"Pyrenean Shepherd" : "Images/Pyrenean Shepherd.jpg",
"Rafeiro do Alentejo" : "Images/Rafeiro do Alentejo.jpg",
"Rat Terrier" : "Images/Rat Terrier.jpg",
"Redbone Coonhound" : "Images/Redbone Coonhound.jpg",
"Rhodesian Ridgeback" : "Images/Rhodesian Ridgeback.jpg",
"Romanian Carpathian Shepherd" : "Images/Romanian Carpathian Shepherd.jpg",
"Romanian Mioritic Shepherd Dog" : "Images/Romanian Mioritic Shepherd Dog.jpg",
"Rottweiler" : "Images/Rottweiler.jpg",
"Russell Terrier" : "Images/Russell Terrier.jpg",
"Russian Toy" : "Images/Russian Toy.jpg",
"Russian Tsvetnaya Bolonka" : "Images/Russian Tsvetnaya Bolonka.jpg",
"Saint Bernard" : "Images/Saint Bernard.jpg",
"Saluki" : "Images/Saluki.jpg",
"Samoyed" : "Images/Samoyed.jpg",
"Schapendoes" : "Images/Schapendoes.jpg",
"Schipperke" : "Images/Schipperke.jpg",
"Scottish Deerhound" : "Images/Scottish Deerhound.jpg",
"Scottish Terrier" : "Images/Scottish Terrier.jpg",
"Sealyham Terrier" : "Images/Sealyham Terrier.jpg",
"Segugio Italiano" : "Images/Segugio Italiano.jpg",
"Shetland Sheepdog" : "Images/Shetland Sheepdog.jpg",
"Shiba Inu" : "Images/Shiba Inu.jpg",
"Shih Tzu" : "Images/Shih Tzu.jpg",
"Shikoku" : "Images/Shikoku.jpg",
"Siberian Husky" : "Images/Siberian Husky.jpg",
"Silky Terrier" : "Images/Silky Terrier.jpg",
"Skye Terrier" : "Images/Skye Terrier.jpg",
"Sloughi" : "Images/Sloughi.jpg",
"Slovakian Wirehaired Pointer" : "Images/Slovakian Wirehaired Pointer.jpg",
"Slovensky Cuvac" : "Images/Slovensky Cuvac.jpg",
"Slovensky Kopov" : "Images/Slovensky Kopov.jpg",
"Small Munsterlander" : "Images/Small Munsterlander.jpg",
"Smooth Fox Terrier" : "Images/Smooth Fox Terrier.jpg",
"Soft Coated Wheaten Terrier" : "Images/Soft Coated Wheaten Terrier.jpg",
"Spanish Mastiff" : "Images/Spanish Mastiff.jpg",
"Spanish Water Dog" : "Images/Spanish Water Dog.jpg",
"Spinone Italiano" : "Images/Spinone Italiano.jpg",
"Stabyhoun" : "Images/Stabyhoun.jpg",
"Staffordshire Bull Terrier" : "Images/Staffordshire Bull Terrier.jpg",
"Standard Schnauzer" : "Images/Standard Schnauzer.jpg",
"Sussex Spaniel" : "Images/Sussex Spaniel.jpg",
"Swedish Lapphund" : "Images/Swedish Lapphund.jpg",
"Swedish Vallhund" : "Images/Swedish Vallhund.jpg",
"Taiwan Dog" : "Images/Taiwan-Dog.jpg",
"Teddy Roosevelt Terrier" : "Images/Teddy Roosevelt Terrier.jpg",
"Thai Ridgeback" : "Images/Thai Ridgeback.jpg",
"Tibetan Mastiff" : "Images/Tibetan Mastiff.jpg",
"Tibetan Spaniel" : "Images/Tibetan Spaniel.jpg",
"Tibetan Terrier" : "Images/Tibetan Terrier.jpg",
"Tornjak" : "Images/Tornjak.jpg",
"Tosa" : "Images/Tosa.jpg",
"Toy Fox Terrier" : "Images/Toy Fox Terrier.jpg",
"Transylvanian Hound" : "Images/Transylvanian Hound.jpg",
"Treeing Tennessee Brindle" : "Images/Treeing Tennessee Brindle.jpg",
"Treeing Walker Coonhound" : "Images/Treeing Walker Coonhound.jpg",
"Vizsla" : "Images/Vizsla.jpg",
"Volpino Italiano" : "Images/Volpino Italiano.jpg",
"Weimaraner" : "Images/Weimaraner.jpg",
"Welsh Springer Spaniel" : "Images/Welsh Springer Spaniel.jpg",
"Welsh Terrier" : "Images/Welsh Terrier.jpg",
"West Highland White Terrier" : "Images/West Highland White Terrier.jpg",
"Wetterhoun" : "Images/Wetterhoun.jpg",
"Whippet" : "Images/Whippet.jpg",
"Wire Fox Terrier" : "Images/Wire Fox Terrier.jpg",
"Wirehaired Pointing Griffon" : "Images/Wirehaired Pointing Griffon.jpg",
"Wirehaired Vizsla" : "Images/Wirehaired Vizsla.jpg",
"Working Kelpie" : "Images/Working Kelpie.jpg",
"Xoloitzcuintli" : "Images/Xoloitzcuintli.jpg",
"Yakutian Laika" : "Images/Yakutian Laika.jpg",
"Yorkshire Terrier" : "Images/Yorkshire Terrier.jpg"
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
