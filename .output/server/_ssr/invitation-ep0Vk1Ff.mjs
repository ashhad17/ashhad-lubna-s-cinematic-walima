//#region node_modules/.nitro/vite/services/ssr/assets/invitation-ep0Vk1Ff.js
var invitation = {
	groom: "Mohammed Ashhad",
	bride: "Lubna Fathima",
	nikah: {
		date: "10 December 2026",
		iso: "2026-12-10T00:00:00+05:30",
		day: "10",
		month: "December",
		year: "2026"
	},
	walima: {
		date: "12 December 2026",
		iso: "2026-12-12T14:00:00+05:30",
		dateNumber: "12",
		month: "December",
		year: "2026",
		day: "Saturday",
		time: "2:00 PM",
		venue: "Star Convention Hall",
		address: "Ring Road, Tumakur, Karnataka 572101"
	},
	rsvp: { whatsapp: "+918197172781" },
	verse: {
		arabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
		english: "And We created you in pairs.",
		reference: "Qur'an 78:8"
	}
};
var walimaDate = new Date(invitation.walima.iso);
var walimaEndDate = new Date(walimaDate.getTime() + 126e5);
var compactDate = (date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
var coupleNames = `${invitation.groom} & ${invitation.bride}`;
`${coupleNames}${invitation.walima.date}`;
//#endregion
export { walimaEndDate as a, walimaDate as i, coupleNames as n, invitation as r, compactDate as t };
