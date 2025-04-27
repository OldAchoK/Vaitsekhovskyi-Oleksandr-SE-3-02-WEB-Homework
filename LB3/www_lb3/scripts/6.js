const dataSite = {
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

dataSite.proSoft.sort();

let itemsList = document.getElementsByClassName("prof-soft-item");
for(let index = 0; index < itemsList.length; index++){
    itemsList[index].innerText=dataSite.proSoft[index];
}