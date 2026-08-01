MoreJS.structureLoad((event) => {
    if (event.id.includes('village')) {
        event.entities.removeIf(() => true);
    }
});
