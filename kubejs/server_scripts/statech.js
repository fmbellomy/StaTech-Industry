// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2

// -----------------------------------------
ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    const recipeId = StaTech.recipeId;
    const kj = KubeJS.id;
    const mc = MC.id;
    const mi = MI.id;
    const sp = Spectrum.id;
    const jh = JustHammers.id;

    // -- ANGEL RING -- //
    event
        .shaped(kj('angel_ring'), ['FGF', 'TRT', 'CTC'], {
            F: mc('feather'),
            R: mi('gold_ring'),
            T: '#c:storage_blocks/titanium',
            C: mi('digital_circuit'),
            G: mi('gravichestplate'),
        })
        .id(recipeId('angel_ring'));

    // -- GLOWING PILLARS -- //
    event
        .shaped('6x ' + kj('glowing_steel_pillar'), ['SDS', 'SGS', 'SDS'], {
            S: '#c:plates/steel',
            G: mc('glowstone'),
            D: '#c:dyes/purple',
        })
        .id(recipeId('glowing_steel_pillar'));

    event
        .shaped('6x ' + kj('glowing_desh_pillar'), ['SDS', 'SGS', 'SDS'], {
            S: '#c:plates/desh',
            G: mc('glowstone'),
            D: '#c:dyes/red',
        })
        .id(recipeId('glowing_desh_pillar'));

    event
        .shaped('6x ' + kj('glowing_ostrum_pillar'), ['SDS', 'SGS', 'SDS'], {
            S: '#c:plates/ostrum',
            G: mc('glowstone'),
            D: '#c:dyes/lime',
        })
        .id(recipeId('glowing_ostrum_pillar'));

    event
        .shaped('6x ' + kj('glowing_calorite_pillar'), ['SDS', 'SGS', 'SDS'], {
            S: '#c:plates/calorite',
            G: mc('glowstone'),
            D: '#c:dyes/orange',
        })
        .id(recipeId('glowing_calorite_pillar'));

    // -- DIAMOND UPGRADE SMITHING TEMPLATE -- //
    event
        .shaped(
            kj('diamond_upgrade_smithing_template'),
            [' D ', 'DPD', ' D '],
            {
                D: mc('diamond'),
                P: mi('steel_plate'),
            }
        )
        .id(recipeId('diamond_upgrade_smithing_template'));

    // -- HIM -- //
    event
        .shaped(kj('bartman'), ['PCP', 'BWB', 'BEB'], {
            P: mi('plutonium_dust'),
            C: mc('brain_coral_block'),
            B: mc('beef'),
            W: mc('black_wool'),
            E: mc('dragon_egg'),
        })
        .id(recipeId('jon_bartman'));

    // ------------------- //
    // -- STATECH COINS -- //
    // ------------------- //

    let common = kj('coin_common');
    let rare = kj('coin_rare');
    let legendary = kj('coin_legendary');
    let mythic = kj('coin_mythic');

    event.shapeless(rare, ['6x ' + common]).id(recipeId('coin_rare_upgrade'));
    event
        .shapeless(legendary, ['7x ' + rare])
        .id(recipeId('coin_legendary_upgrade'));
    event
        .shapeless(mythic, ['8x ' + legendary])
        .id(recipeId('coin_mythic_upgrade'));
    event
        .shapeless('8x ' + legendary, [mythic])
        .id(recipeId('coin_legendary_downgrade'));
    event
        .shapeless('7x ' + rare, [legendary])
        .id(recipeId('coin_rare_downgrade'));
    event
        .shapeless('6x ' + common, [rare])
        .id(recipeId('coin_common_downgrade'));

    // -------------- //
    //    COMMON      //
    // -------------- //

    // -- IRON ORE -- //
    event
        .shaped('8x ' + mc('iron_ore'), ['CCC', '   ', 'CCC'], {
            C: common,
        })
        .id(recipeId('iron_ore_from_common'));

    // -- TIN ORE -- //
    event
        .shaped('8x ' + mi('tin_ore'), ['C C', 'C C', 'C C'], {
            C: common,
        })
        .id(recipeId('tin_ore_from_common'));

    // -- ANDESITE -- //
    event
        .shaped('16x ' + mc('andesite'), ['C', ' ', 'C'], {
            C: common,
        })
        .id(recipeId('andesite_from_common'));

    // -- AMETHYST SHARD -- //
    event
        .shaped('8x ' + mc('amethyst_shard'), ['C  ', ' C ', '  C'], {
            C: common,
        })
        .noMirror()
        .id('amethyst_shard_from_common');

    // -- TOPAZ SHARD -- //
    event
        .shaped('8x ' + sp('topaz_shard'), ['  C', ' C ', 'C  '], {
            C: common,
        })
        .noMirror()
        .id(recipeId('topaz_shard_from_common'));

    // -- CITRINE SHARD -- //
    event
        .shaped('8x ' + sp('citrine_shard'), ['C  ', 'C  ', 'C  '], {
            C: common,
        })
        .id(recipeId('citrine_shard_from_common'));

    // -- COAL ORE -- //
    event
        .shaped('12x ' + mc('coal_ore'), ['C C', ' C ', 'C C'], {
            C: common,
        })
        .id(recipeId('coal_ore_from_common'));

    // -- COPPER ORE -- //
    event
        .shaped('12x ' + mc('copper_ore'), ['CCC', 'C  ', 'CCC'], {
            C: common,
        })
        .id(recipeId('copper_ore_from_common'));

    // -- ZINC ORE -- //
    event
        .shaped('8x create:zinc_ore', ['CC', 'CC'], {
            C: common,
        })
        .id(recipeId('zinc_ore_from_common'));

    // -- SALT ORE -- //
    event
        .shaped('8x ' + mi('salt_ore'), [' CC', 'CC '], {
            C: common,
        })
        .id(recipeId('salt_ore_from_common'));

    // -- LIGNITE COAL ORE -- //
    event
        .shaped('12x ' + mi('lignite_coal_ore'), ['CC ', ' C ', ' CC'], {
            C: common,
        })
        .id(recipeId('lignite_coal_ore_from_common'));

    // -------------- //
    //      RARE      //
    // -------------- //

    // -- GOLD ORE -- //
    event
        .shaped('16x ' + mc('gold_ore'), [' C ', 'C C', ' C '], {
            C: rare,
        })
        .id(recipeId('gold_ore_from_rare'));

    // -- ANTIMONY ORE -- //
    event
        .shaped('8x ' + mi('antimony_ore'), ['   ', 'CCC', '   '], {
            C: rare,
        })
        .id(recipeId('antimony_ore_from_rare'));

    // -- DIAMOND ORE -- //
    event
        .shaped('8x ' + mc('diamond_ore'), ['C', 'C', 'C'], {
            C: rare,
        })
        .id(recipeId('diamond_ore_from_rare'));

    // -- REDSTONE ORE -- //
    event
        .shaped('8x ' + mc('redstone_ore'), ['C C', '   ', 'C C'], {
            C: rare,
        })
        .id(recipeId('redstone_ore_from_rare'));

    // -- LEAD ORE -- //
    event
        .shaped('8x ' + mi('lead_ore'), ['CC', 'CC'], {
            C: rare,
        })
        .id(recipeId('lead_ore_from_rare'));

    // -- NICKEL ORE -- //
    event
        .shaped('8x ' + mi('nickel_ore'), ['CCC', ' C '], {
            C: rare,
        })
        .id(recipeId('nickel_ore_from_rare'));

    // -- BAUXITE ORE -- //
    event
        .shaped('8x ' + mi('bauxite_ore'), [' C ', 'CCC', ' C '], {
            C: rare,
        })
        .id(recipeId('bauxite_ore_from_rare'));

    // -- FLUORITE ORE -- //
    event
        .shaped('8x ' + mi('fluorite_ore'), ['C  ', 'CCC', '  C'], {
            C: rare,
        })
        .id(recipeId('fluorite_ore_from_rare'));

    // -- QUARTZ ORE -- //
    event
        .shaped('8x ' + mi('quartz_ore'), ['C C', ' C ', 'C C'], {
            C: rare,
        })
        .id(recipeId('quartz_ore_from_rare'));

    // -- KERNITE ORE -- //
    event
        .shaped('8x ' + mi('kernite_ore'), ['CCC', ' C ', 'CCC'], {
            C: rare,
        })
        .id(recipeId('kernite_ore_from_rare'));

    // -- RUBY ORE -- //
    event
        .shaped('8x ' + mi('ruby_ore'), ['  C', 'CCC', 'C  '], {
            C: rare,
        })
        .id(recipeId('ruby_ore_from_rare'));

    // -- SAPPHIRE ORE -- //
    event
        .shaped('8x ' + mi('sapphire_ore'), ['CCC', '   ', 'CCC'], {
            C: rare,
        })
        .id(recipeId('sapphire_ore_from_rare'));

    // -------------- //
    //   LEGENDARY    //
    // -------------- //

    // -- ANCIENT DEBRIS -- //
    event
        .shaped('2x ' + mc('ancient_debris'), ['C C', '   ', 'C C'], {
            C: legendary,
        })
        .id(recipeId('ancient_debris_from_legendary'));

    // -- TUNGSTEN ORE -- //
    event
        .shaped('8x ' + mi('tungsten_ore'), [' C ', 'C C', ' C '], {
            C: legendary,
        })
        .id(recipeId('tungsten_ore_from_legendary'));

    // -- MOZANITE ORE -- //
    event
        .shaped('8x ' + mi('monazite_ore'), ['CCC', ' C '], {
            C: legendary,
        })
        .id(recipeId('monazite_ore_from_legendary'));

    // -- URANIUM ORE -- //
    event
        .shaped('8x ' + mi('uranium_ore'), ['C C', 'C C', 'CCC'], {
            C: legendary,
        })
        .id(recipeId('uranium_ore_from_legendary'));

    // -- DESH ORE -- //
    event
        .shaped('8x ' + mi('desh_ore'), ['CC ', 'C C', 'CC '], {
            C: legendary,
        })
        .id(recipeId('desh_ore_from_legendary'));

    // -- OSTRUM ORE -- //
    event
        .shaped('8x ' + mi('ostrum_ore'), ['CCC', 'CCC', 'CCC'], {
            C: legendary,
        })
        .id('ostrum_ore_from_legendary');

    // -- MOON ICE ORE -- //
    event
        .shaped('8x ' + mi('moon_ice_ore'), [' CC', ' C ', 'CC '], {
            C: legendary,
        })
        .id('moon_ice_ore_from_legendary');

    // -- TITANIUM ORE -- //
    event
        .shaped('8x ' + mi('titanium_ore'), ['C C', 'CCC', 'C C'], {
            C: legendary,
        })
        .id('titanium_ore_from_legendary');

    // -- PLATINUM ORE -- //
    event
        .shaped('8x ' + mi('platinum_ore'), ['CCC', 'C C', 'C C'], {
            C: legendary,
        })
        .id('platinum_ore_from_legendary');

    // -- PERIDOT ORE -- //
    event
        .shaped('8x ' + mi('peridot_ore'), ['   ', 'C C', 'CCC'], {
            C: legendary,
        })
        .id('peridot_ore_from_legendary');

    // -- EMERALD ORE -- //
    event
        .shaped('8x ' + mc('emerald_ore'), [' C ', ' C ', 'CCC'], {
            C: legendary,
        })
        .id('emerald_ore_from_legendary');

    // -------------- //
    //     MYTHIC     //
    // -------------- //

    // -- MENDING BOOK -- //
    event
        .shaped(
            Item.of(mc('enchanted_book')).enchant(mc('mending'), 1),
            [' C ', 'C C', ' C '],
            {
                C: mythic,
            }
        )
        .id(recipeId('mending_from_mythic'));

    // -- SOULBOUND BOOK -- //
    event
        .shaped(
            Item.of(mc('enchanted_book')).enchant('yigd:soulbound', 1),
            ['C C', '   ', 'C C'],
            {
                C: mythic,
            }
        )
        .id(recipeId('soulbound_from_mythic'));

    // -- CALORITE ORE -- //
    event
        .shaped('8x ' + mi('calorite_ore'), ['CCC', 'C  ', 'CCC'], {
            C: mythic,
        })
        .id(recipeId('calorite_ore_from_mythic'));

    // -- IRIDIUM ORE -- //
    event
        .shaped('8x ' + mi('iridium_ore'), ['C C', 'C C', 'CCC'], {
            C: mythic,
        })
        .id(recipeId('iridium_ore_from_mythic'));

    // --------------- //
    // -- TOOL SETS -- //
    // --------------- //

    const toolSetsMaterials = ['bronze', 'steel', 'copper'];
    const armorSetsMaterials = ['bronze', 'steel'];

    // -- BOOTS -- //
    armorSetsMaterials.forEach((material) => {
        event
            .shaped(Item.of(kj(`${material}_boots`)), ['   ', 'A A', 'A A'], {
                A: `#c:plates/${material}`,
            })
            .id(recipeId(`${material}_boots`));

        // -- CHESTPLATE -- //
        event
            .shaped(
                Item.of(kj(`${material}_chestplate`)),
                ['A A', 'AAA', 'AAA'],
                {
                    A: `#c:plates/${material}`,
                }
            )
            .id(recipeId(`${material}_chestplate`));

        // -- LEGGINGS -- //
        event
            .shaped(
                Item.of(kj(`${material}_leggings`)),
                ['AAA', 'A A', 'A A'],
                {
                    A: `#c:plates/${material}`,
                }
            )
            .id(recipeId(`${material}_leggings`));

        // -- HELMET -- //
        event
            .shaped(Item.of(kj(`${material}_helmet`)), ['AAA', 'A A', '   '], {
                A: `#c:plates/${material}`,
            })
            .id(recipeId(`${material}_helmet`));
    });

    toolSetsMaterials.forEach((material) => {
        // -- PICKAXE -- //
        event
            .shaped(Item.of(kj(`${material}_pickaxe`)), ['AAA', ' B ', ' B '], {
                A: `#c:ingots/${material}`,
                B: '#c:rods/wooden',
            })
            .id(recipeId(`${material}_pickaxe`));

        // -- AXE -- //
        event
            .shaped(Item.of(kj(`${material}_axe`)), ['AA ', 'AB ', ' B '], {
                A: `#c:ingots/${material}`,
                B: '#c:rods/wooden',
            })
            .id(recipeId(`${material}_axe`));

        // -- SHOVEL -- //
        event
            .shaped(Item.of(kj(`${material}_shovel`)), [' A ', ' B ', ' B '], {
                A: `#c:ingots/${material}`,
                B: '#c:rods/wooden',
            })
            .id(recipeId(`${material}_shovel`));

        // -- SWORD -- //
        event
            .shaped(Item.of(kj(`${material}_sword`)), [' A ', ' A ', ' B '], {
                A: `#c:ingots/${material}`,
                B: '#c:rods/wooden',
            })
            .id(recipeId(`${material}_sword`));

        // -- HOE -- //
        event
            .shaped(Item.of(kj(`${material}_hoe`)), ['AA ', ' B ', ' B '], {
                A: `#c:ingots/${material}`,
                B: '#c:rods/wooden',
            })
            .id(recipeId(`${material}_hoe`));
    });

    // -- IRON LUMBERAXE -- //
    event
        .shaped(kj('iron_lumberaxe'), ['PBN', 'PSN', ' S '], {
            B: '#c:storage_blocks/iron',
            P: '#c:plates/iron',
            N: '#c:nuggets/iron',
            S: '#c:rods/wooden',
        })
        .id(recipeId('iron_lumberaxe'));

    // -- COPPER LUMBERAXE -- //
    event
        .shaped(kj('copper_lumberaxe'), ['PBN', 'PSN', ' S '], {
            B: '#c:storage_blocks/copper',
            P: '#c:plates/copper',
            N: '#c:nuggets/copper',
            S: '#c:rods/wooden',
        })
        .id(recipeId('copper_lumberaxe'));

    // -- STEEL LUMBERAXE -- //
    event
        .shaped(kj('steel_lumberaxe'), ['PBN', 'PSN', ' S '], {
            B: '#c:storage_blocks/steel',
            P: '#c:plates/steel',
            N: '#c:nuggets/steel',
            S: '#c:rods/wooden',
        })
        .id(recipeId('steel_lumberaxe'));

    // -- BRONZE LUMBERAXE -- //
    event
        .shaped(kj('bronze_lumberaxe'), ['PBN', 'PSN', ' S '], {
            B: '#c:storage_blocks/bronze',
            P: '#c:plates/bronze',
            N: '#c:nuggets/bronze',
            S: '#c:rods/wooden',
        })
        .id(recipeId('bronze_lumberaxe'));

    // -- GOLD LUMBERAXE -- //
    event
        .shaped(kj('gold_lumberaxe'), ['PBN', 'PSN', ' S '], {
            B: '#c:storage_blocks/gold',
            P: '#c:plates/gold',
            N: '#c:nuggets/gold',
            S: '#c:rods/wooden',
        })
        .id(recipeId('gold_lumberaxe'));

    // -- DIAMOND LUMBERAXE -- //
    event
        .smithing(
            kj('diamond_lumberaxe'),
            kj('diamond_upgrade_smithing_template'),
            kj('steel_lumberaxe'),
            mc('diamond')
        )
        .id(recipeId('diamond_lumberaxe'));

    // -- NETHERITE LUMBERAXE -- //
    event
        .smithing(
            kj('netherite_lumberaxe'),
            mc('netherite_upgrade_smithing_template'),
            kj('diamond_lumberaxe'),
            mc('netherite_ingot')
        )
        .id(recipeId('netherite_lumberaxe'));
});

ServerEvents.tags('item', (event) => {
    const kj = KubeJS.id;
    const mc = MC.id;
    const mi = MI.id;
    const jh = JustHammers.id;

    const HAMMERS = [
        jh('bronze_hammer'),
        jh('bronze_impact_hammer'),
        jh('bronze_reinforced_hammer'),
        jh('bronze_reinforced_impact_hammer'),
        jh('bronze_destructor_hammer'),
        jh('steel_hammer'),
        jh('steel_impact_hammer'),
        jh('steel_reinforced_hammer'),
        jh('steel_reinforced_impact_hammer'),
        jh('steel_destructor_hammer'),
    ];
    HAMMERS.forEach((id) => {
        event.add(mc('pickaxes'), id);
        event.add(mc('enchantable/durability'), id);
        event.add(mc('enchantable/mining'), id);
        event.add(mc('enchantable/mining_loot'), id);
        event.add(mc('enchantable/vanishing'), id);
    });

    const LUMBERAXES = [
        kj('iron_lumberaxe'),
        kj('copper_lumberaxe'),
        kj('steel_lumberaxe'),
        kj('bronze_lumberaxe'),
        kj('gold_lumberaxe'),
        kj('diamond_lumberaxe'),
        kj('netherite_lumberaxe'),
    ];
    LUMBERAXES.forEach((id) => {
        event.add(kj('lumberaxes'), id);
        event.add(mc('enchantable/durability'), id);
        event.add(mc('enchantable/mining'), id);
        event.add(mc('enchantable/mining_loot'), id);
        event.add(mc('enchantable/vanishing'), id);
        event.remove(mc('axes'), id);
    });
    event.add(kj('lumberaxes'), mi('steam_chainsaw'));

    const COINS = [
        kj('coin_common'),
        kj('coin_rare'),
        kj('coin_legendary'),
        kj('coin_mythic'),
    ];
    COINS.forEach((id) => event.add(kj('statech_coins'), id));

    const CLEAR_ARMOR = [
        kj('clear_helmet'),
        kj('clear_chestplate'),
        kj('clear_leggings'),
        kj('clear_boots'),
    ];
    CLEAR_ARMOR.forEach((id) => event.add(kj('clear_armor'), id));
});

// -- BLOCK TAGGING -- //
ServerEvents.tags('block', (event) => {
    const kj = KubeJS.id;
    const mc = MC.id;
    const mi = MI.id;
    const mit = MITweaks.id;
    const sp = Spectrum.id;
    const jh = JustHammers.id;

    // -- PREFERRED TOOL FOR GLASS-LIKE BLOCKS -- //
    event.add(mc('mineable/pickaxe'), [
        '#c:glass_blocks',
        mc('glowstone'),
        '#chisel:chiseled_glowstone',
        /^xtonesreworked:glaxx_block_/,
    ]);
    // -- MI TWEAKS TAGGING -- //
    const MI_TWEAKS_BLOCKS = Ingredient.of('@mi_tweaks')
        .except(mit('machine_blueprint'))
        .getStacks()
        .toArray();
    MI_TWEAKS_BLOCKS.forEach((block) => {
        event.add(mc('mineable/pickaxe'), [`${block.id}`]);
        event.add(mc('needs_stone_tool'), [`${block.id}`]);
    });
    const tagsToRemoveFromCopper = [
        mc('incorrect_for_wooden_tool'),
        mc('incorrect_for_gold_tool'),
        mc('needs_stone_tool'),
    ];
    tagsToRemoveFromCopper.forEach((tag) => {
        event.remove(`${tag}`, [
            mc('deepslate_copper_ore'),
            mc('raw_copper_block'),
            mc('copper_ore'),
        ]);
    });
});

// -- ITEM TAGGING -- //
ServerEvents.tags('item', (event) => {
    const mi = MI.id;

    // -- MI PARTS TAGGING -- //
    const MATERIALS = [
        'copper',
        'iron',
        'steel',
        'bronze',
        'tin',
        'lead',
        'silver',
        'gold',
        'nickel',
        'zinc',
        'aluminum',
        'platinum',
        'tungsten',
        'titanium',
        'chromium',
        'manganese',
        'electrum',
        'invar',
        'enderium',
        'annealed_copper',
        'stainless_steel',
        'battery_alloy',
        'cupronickel',
        'kanthal',
        'iridium',
        'silicon',
        'superconductor',
        'blastproof_alloy',
    ];

    const CUSTOMMATERIALS = [
        'desh',
        'zinc',
        'tungstensteel',
        'ostrum',
        'calorite',
        'enderium',
        'polytetrafluoroethylene',
        'moon_ice',
        'stone',
        'tuff',
        'calcite',
        'dark_ashes',
        'sky_steel',
        'sky_bronze',
        'entro',
        'ruby',
        'sapphire',
        'peridot',
        'clay',
        'kernite',
        'cobalt',
        'acrylonitrile_butadiene_styrene',
        'boron_trioxide',
        'fluorite',
        'lithium_fluoride',
        'lithium_hydride',
        'lithium_tetrafluoroborate',
    ];

    const baseparts = [
        '_rotor',
        '_curved_plate',
        '_blade',
        '_large_plate',
        '_bolt',
        '_ring',
        '_hot_ingot',
        '_double_ingot',
        '_drill_head',
    ];
    const supplparts = [
        '_plate',
        '_gear',
        '_rod',
        '_tiny_dust',
        '_dust',
        '_ingot',
        '_ore',
        '_nugget',
    ];

    const allparts = baseparts.concat(supplparts);

    const tag = (itemId, genericTag, specificTag) => {
        if (Item.exists(itemId)) {
            event.add(genericTag, itemId);
            event.add(specificTag, itemId);
        }
    };
    const tagPart = (material, part) => {
        const itemId = mi(`${material}${part}`);
        const tagCategory = `${part.slice(1) + s}`;
        const genericTag = `c:${tagCatgory}`;
        const specificTag = `c:${tagCategory}/${material}`;
        tag(itemId, genericTag, specificTag);
    };

    MATERIALS.forEach((material) => {
        allparts.forEach((part) => {
            tagPart(material, part);
        });
    });

    MATERIALS.forEach((material) => {
        baseparts.forEach((part) => {
            tagPart(material, part);
        });
    });
    CUSTOMMATERIALS.forEach((material) => {
        tag(mi(`deepslate_${material}_ore`), `c:ores`, `c:ores/${material}`);
    });

    CUSTOMMATERIALS.forEach((material) => {
        tag(
            mi(`raw_${material}`),
            `c:raw_materials`,
            `c:raw_materials/${material}`
        );
    });

    CUSTOMMATERIALS.forEach((material) => {
        tag(
            mi(`${material}_block`),
            `c:storage_blocks`,
            `c:storage_blocks/${material}`
        );
    });

    CUSTOMMATERIALS.forEach((material) => {
        tag(
            mi(`raw_${material}_block`),
            `c:storage_blocks`,
            `c:storage_blocks/raw_${material}`
        );
    });

    CUSTOMMATERIALS.forEach((material) => {
        allparts.forEach((part) => {
            tagPart(material, part);
        });
    });

    ['ruby', 'sapphire', 'peridot'].forEach((gem) => {
        tag(mi(`${gem}`), `c:gems`, `c:gems/${gem}`);
    });
});

EntityEvents.spawned(nml('goose'), (event) => {
    const nml = NoMansLand.id;

    if (Math.random() > 0.02) return;
    event.entity.setCustomName('Neurotic Goose');
    event.entity.setNbt({
        attributes: [{ id: mc('max_health'), base: 200 }],
    });
});
