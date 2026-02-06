// JavaScript untuk mengubah harga dengan mudah
// Letakkan kode ini di file terpisah atau di console browser

// PRICE MANAGEMENT SYSTEM
const priceConfig = {
    // Umroh Packages
    umroh: {
        reguler: {
            price: 28000000,
            duration: "9H/8M",
            name: "Umroh Reguler"
        },
        premium: {
            price: 35000000,
            duration: "12H/11M",
            name: "Umroh Premium"
        },
        keluarga: {
            price: 42000000,
            duration: "14H/13M",
            name: "Umroh Keluarga"
        }
    },
    
    // Flight Prices
    flights: {
        domestic: {
            prix: 950000,
            currency: "IDR"
        },
        singapore: {
            price: 1850000,
            currency: "IDR"
        },
        bangkok: {
            price: 1650000,
            currency: "IDR"
        }
    },
    
    // Hotel Prices
    hotels: {
        jakarta: {
            price: 1200000,
            pernight: true
        },
        surabaya: {
            price: 650000,
            pernight: true
        },
        bandung: {
            price: 450000,
            pernight: true
        }
    },
    
    // Bus Rental
    bus: {
        dalam_kota: 3500000,
        luar_kota_day1: 4500000,
        per_hari_tambahan: 3500000,
        bandara: 2500000
    },
    
    // Tours
    tours: {
        bali: 5500000,
        lombok: 4800000,
        yogyakarta: 3900000,
        raja_ampat: 12500000,
        danau_toba: 2800000,
        malaysia_singapore: 8500000
    },
    
    // Outbound
    outbound: {
        adventure: 750000,
        nature: 850000,
        water_sports: 950000,
        corporate_dinner: 500000,
        sport_recreation: 600000,
        training: 700000
    }
};

// Function untuk update harga di HTML
function updatePrice(elementId, newPrice) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = formatCurrency(newPrice);
    }
}

// Function untuk format currency ke Rupiah
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Bulk update untuk semua paket umroh
function updateAllPackages() {
    // Update Umroh
    updatePrice('umroh-reguler-price', priceConfig.umroh.reguler.price);
    updatePrice('umroh-premium-price', priceConfig.umroh.premium.price);
    updatePrice('umroh-keluarga-price', priceConfig.umroh.keluarga.price);
    
    // Update Tours  
    updatePrice('bali-price', priceConfig.tours.bali);
    updatePrice('lombok-price', priceConfig.tours.lombok);
    updatePrice('yogyakarta-price', priceConfig.tours.yogyakarta);
    updatePrice('raja-ampat-price', priceConfig.tours.raja_ampat);
    updatePrice('danau-toba-price', priceConfig.tours.danau_toba);
    updatePrice('malaysia-sg-price', priceConfig.tours.malaysia_singapore);
}

// Export price config ke JSON (untuk backup/admin panel)
function exportPriceConfig() {
    const json = JSON.stringify(priceConfig, null, 2);
    console.log(json);
    
    // Download as file
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(json));
    element.setAttribute("download", "price-config.json");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Import price config dari JSON
function importPriceConfig(jsonFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const newConfig = JSON.parse(e.target.result);
            Object.assign(priceConfig, newConfig);
            console.log("Prices updated successfully!");
            updateAllPackages();
        } catch(error) {
            console.error("Error importing prices:", error);
        }
    };
    reader.readAsText(jsonFile);
}

// Admin Panel untuk manage prices
function createAdminPanel() {
    const panel = document.createElement('div');
    panel.id = 'admin-panel';
    panel.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: white;
        border: 2px solid #1e88e5;
        border-radius: 8px;
        padding: 20px;
        width: 300px;
        max-height: 500px;
        overflow-y: auto;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    panel.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h3 style="margin: 0;font-size: 16px;">Admin Panel - Harga</h3>
            <button onclick="document.getElementById('admin-panel').remove()" style="background: none; border: none; cursor: pointer; font-size: 20px;">×</button>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 10px;">
            <div>
                <label>Umroh Reguler:</label>
                <input type="number" id="umroh-reguler-input" value="${priceConfig.umroh.reguler.price}" style="width: 100%; padding: 5px;">
            </div>
            <div>
                <label>Umroh Premium:</label>
                <input type="number" id="umroh-premium-input" value="${priceConfig.umroh.premium.price}" style="width: 100%; padding: 5px;">
            </div>
            <div>
                <label>Tour Bali:</label>
                <input type="number" id="tour-bali-input" value="${priceConfig.tours.bali}" style="width: 100%; padding: 5px;">
            </div>
            <button onclick="saveAdminChanges()" style="background: #1e88e5; color: white; border: none; padding: 10px; border-radius: 4px; cursor: pointer;">Simpan Perubahan</button>
            <button onclick="exportPriceConfig()" style="background: #ff6f00; color: white; border: none; padding: 10px; border-radius: 4px; cursor: pointer;">Download Config</button>
        </div>
    `;
    
    document.body.appendChild(panel);
}

// Save changes dari admin panel
function saveAdminChanges() {
    priceConfig.umroh.reguler.price = parseInt(document.getElementById('umroh-reguler-input').value);
    priceConfig.umroh.premium.price = parseInt(document.getElementById('umroh-premium-input').value);
    priceConfig.tours.bali = parseInt(document.getElementById('tour-bali-input').value);
    
    updateAllPackages();
    alert('Prices updated successfully!');
}

// Activate admin panel (call in console)
console.log("Price Management Ready! Type: createAdminPanel() to open admin");

// Export functions untuk global use
window.priceConfig = priceConfig;
window.updatePrice = updatePrice;
window.formatCurrency = formatCurrency;
window.updateAllPackages = updateAllPackages;
window.exportPriceConfig = exportPriceConfig;
window.createAdminPanel = createAdminPanel;
window.saveAdminChanges = saveAdminChanges;
