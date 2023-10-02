import flagsmith from "flagsmith";

flagsmith.init({
    environmentID:"b7eQEfGPnUcLQRuanVsKRJ",
    api: "https://flagsmith.lostworlds.xyz/api/v1/",
    onChange: (oldFlags, params) => {

        // Determines if the update came from the server or local cached storage
        const { isFromServer } = params;

        document.getElementById("loaded").classList.remove("hidden")
        document.getElementById("loading").classList.add("hidden")

        console.log("Flagsmith flags updated", isFromServer);

        // Get all flags
        console.log("Received flags", flagsmith.getAllFlags())

        // Check for a feature
        const test_feat_1 = flagsmith.hasFeature("test_feat_1")
        
    }
});