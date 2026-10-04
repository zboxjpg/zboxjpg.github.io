let stored_items = [];
let items = [];
let current_item = "";

async function loadItems() {
    try {
        const response = await fetch('/assets/items.json');
        if (!response.ok) {
            throw new Error(`error: ${response.status}`);
        }
        items = await response.json();
        return items;
    } catch (error) {
        console.error(`failed to fetch data: ${error}`);
    }
}

function updateRandomItem() {
    const img = document.querySelector("#random-item");
    const name = document.querySelector("#item-name");

    img.src = current_item['img'];
    name.textContent = current_item['name'];
}

function getRandomItem() {
    const randomIndex = get_random_int(0, Object.keys(items).length);
    current_item = items[Object.keys(items)[randomIndex]];
    updateRandomItem();
}

window.onload = async function() {
    await loadItems();
    getRandomItem();
};
