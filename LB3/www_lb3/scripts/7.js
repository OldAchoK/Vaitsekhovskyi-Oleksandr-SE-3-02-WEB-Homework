const dataSiteCache = {
    proSoft: [
    "Firewall",
    "Antivirus",
    "VPN"
    ],
    whyUs: [
    "High quality",
    "Reliable",
    "Fast"
    ]
};

dataSite.whyUs.sort();


let itemsListCache = document.getElementsByClassName("list1")[0].children;
for(let index = 0; index < itemsListCache.length; index++){
    itemsListCache[index].innerHTML='<a href="#">'+ dataSite.whyUs[index] + '</a>';
}