
function LoadWeaponsSkins(bool)
    if bool then 
        for k,v in pairs(Config.WeaponSkinsMk2) do
            SendNUIMessage({
                action = "loadSkinMk2",
                name = v.name,
                tint = v.tint,
                primaryColor = v.primaryColor,
                secondColor = v.secondColor
            })
        end
    else
        for k,v in pairs(Config.WeaponSkins) do
            SendNUIMessage({
                action = "loadSkin",
                name = v.name,
                tint = v.tint,
                primaryColor = v.primaryColor,
                secondColor = v.secondColor
            })
        end
    end
end

RegisterNUICallback('applySkin', function(data, cb)
    local ped = PlayerPedId()
    local weaponhash = GetSelectedPedWeapon(ped)
    local tint = tonumber(data.tint)
    SetPedWeaponTintIndex(ped, weaponhash, tint)
end)