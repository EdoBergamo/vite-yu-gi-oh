import { reactive } from "vue";

export const store = reactive({
    text: "",
    valueType: '',
    cards: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1000&offset=0&archetype=',
    archetypes: [],
    apiArchetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
});