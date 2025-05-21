// Simple script just to confirm loading

document.addEventListener('DOMContentLoaded', () => {
    console.log("SK Architecture Bio Link Page Loaded - Simplified Version");

    // No complex JS needed for this version unless you want to add
    // analytics or other specific interactions later.
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("SK Architecture Bio Link Page Loaded");

    // --- Popup Functionality ---
    // const locationBtn = document.getElementById('location-btn');
    const popupOverlay = document.getElementById('location-popup');
    const closeBtn = document.getElementById('popup-close-btn');
    const addressElement = document.getElementById('popup-address');
    const directionsBtn = document.getElementById('get-directions-btn');
// ... (inside DOMContentLoaded)
const locationBtn = document.getElementById('location-btn');
// ... (other elements)

if (locationBtn) {
    console.log("Location button (#location-btn) FOUND (now using <button>).");
    locationBtn.addEventListener('click', (event) => {
        console.log("Location button CLICKED!");
        // event.preventDefault(); // No longer strictly necessary for <button type="button">
        console.log("Opening popup...");
        openPopup();
    });
} else {
    console.error("Location button (#location-btn) NOT FOUND!");
}
// ... (rest of JS)
    // Function to generate Google Maps directions URL
    function getDirectionsUrl(address) {
        if (!address) return '#'; // Return '#' if address is empty
        // Remove the company name line for better geocoding, keep line breaks for readability here
        const addressForUrl = address.trim().split('\n').slice(1).join(', '); // Get lines after the first, join with comma-space
        const encodedAddress = encodeURIComponent(addressForUrl);
        return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    }

    // Function to open the popup
    function openPopup() {
        if (!popupOverlay || !addressElement || !directionsBtn) return; // Safety check

        // Get address text (use innerText to handle <br>)
        const addressText = addressElement.innerText;
        // Set the href for the 'Get Directions' button
        directionsBtn.href = getDirectionsUrl(addressText);

        // Show the popup using the 'active' class
        popupOverlay.classList.add('active');
    }

    // Function to close the popup
    function closePopup() {
         if (!popupOverlay) return; // Safety check
         popupOverlay.classList.remove('active');
    }

    // Event Listeners
    if (locationBtn) {
        locationBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            openPopup();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closePopup);
    }

    if (popupOverlay) {
        // Close popup if user clicks on the overlay itself (outside the content)
        popupOverlay.addEventListener('click', (event) => {
            if (event.target === popupOverlay) {
                closePopup();
            }
        });
    }

    // Optional: Close popup with the Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && popupOverlay.classList.contains('active')) {
            closePopup();
        }
    });

    // --- End Popup Functionality ---

    // Keep other JS like console logs if needed
});
