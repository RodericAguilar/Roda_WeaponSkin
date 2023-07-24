local mk2 = false
local open = false
RegisterCommand(Config.Command, function()
    if open then return end
    local ped = PlayerPedId()
    if not IsPedArmed(ped, 7) then
        print('You are not holding a weapon')
        return
    end

    local weaponhash = GetSelectedPedWeapon(ped)
    local tint = GetWeaponTintCount(weaponhash)
    if tint > 8 then 
        mk2 = true
    else
        mk2 = false
    end

    if mk2 then 
        LoadWeaponsSkins(true)
    else
        LoadWeaponsSkins(false)
    end
    SetNuiFocus(true,true)
    open = true
end)

RegisterNUICallback('exit', function(data, cb)
    SetNuiFocus(false, false)
    open = false
end)