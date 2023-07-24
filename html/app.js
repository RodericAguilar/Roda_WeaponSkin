var currentWeapon = null
window.addEventListener('message', function(event) {
    var v = event.data

    switch(v.action) {
        case 'loadSkin':
            $('.AllContainer').show()
            $('.AllSkins').append(`
                <div id="skinCurrent-${v.tint}" class="Skin">
                    <div id="skin-${v.tint}" class="ColorSkin" style="background: linear-gradient(45deg, ${v.primaryColor} 51%, ${v.secondColor} 51%) "></div>
                    <p><span class="label">${v.name}</span></p>
                </div>
            `)
            $(`#skinCurrent-${currentWeapon}`).addClass('Current')
            $(`#skin-${v.tint}`).click(() => {
                $.post('https://Roda_WeaponSkin/applySkin', JSON.stringify({
                    tint: v.tint                
                }));
                currentWeapon = v.tint
                
                CloseAll()
            })
        break;

        case 'loadSkinMk2':
            $('.AllContainer').show()
            $('.AllSkins').append(`
                <div id="skinCurrent-${v.tint}" class="Skin">
                <div id="skin-${v.tint}" class="ColorSkin" style="background: linear-gradient(45deg, ${v.primaryColor} 51%, ${v.secondColor} 51%) "></div>
                    <p><span class="label">${v.name}</span></p>
                </div>
            `)
            $(`#skinCurrent-${currentWeapon}`).addClass('Current')
            $(`#skin-${v.tint}`).click(() => {
                $.post('https://Roda_WeaponSkin/applySkin', JSON.stringify({
                    tint: v.tint                
                }));
                currentWeapon = v.tint
                CloseAll()
            })
        break;

    }
})


function CloseAll() {
    $.post('https://Roda_WeaponSkin/exit', JSON.stringify({}));
    $('.AllContainer').hide()
    $('.Skin').remove()
}

$(document).keyup((e) => {
    if (e.key === "Escape") {
        CloseAll()
    }
});