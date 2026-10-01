MoreJS.structureLoad((event) => {
    const kjs = KubeJS.id;
    const mc = MC.id;
    const replacementMap = {};
    ['waxed_oxidized_copper', 'waxed_copper_block', 'oxidized_copper'].forEach(
        (path) => {
            replacementMap[mc(path)] = kjs(`decorative_{path}`);
        }
    );

    if (event.id.includes('trial_chambers')) {
        event.forEachPalettes((palette) => {
            palette.forEach((blockInfo) => {
                if (
                    blockInfo.id == mc('jigsaw') &&
                    blockInfo.getNbt() != null
                ) {
                    let block = blockInfo.getNbt().getString('final_state');
                    if (replacementMap[block])
                        blockInfo
                            .getNbt()
                            .putString('final_state', replacementMap[block]);
                }
                if (replacementMap[blockInfo.id]) {
                    blockInfo.setBlock(replacementMap[blockInfo.id]);
                }
            });
        });
    }
});
