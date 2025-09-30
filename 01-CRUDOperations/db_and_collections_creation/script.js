use miBaseDeDatos

db.coleccionPrueba1.insertOne(
{
  "$schema": "https://example.org/schemas/enterprise/v2/schema.json",
  "id": "urn:enterprise:dataset:acme-corp:2025-09-28",
  "generatedAt": "2025-09-28T16:00:00-05:00",
  "version": "2.7.14",
  "meta": {
    "author": {
      "name": "GeneradorAutomático",
      "contact": "no-reply@example.org",
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
    "licenses": [
      {
        "type": "proprietary",
        "holder": "ACME Corporation",
        "termsUrl": "https://acme.example.org/terms/v2"
      },
      {
        "type": "dataset-sample",
        "note": "Solo para demostración; no usar en producción."
      }
    ],
    "tags": ["ejemplo", "complejo", "multilenguaje", "geojson", "finanzas"]
  },
  "organizations": [
    {
      "orgId": "org_0001",
      "name": "ACME International",
      "domains": ["acme.example.org", "acme-int.example.com"],
      "addresses": [
        {
          "type": "headquarters",
          "line1": "Av. Principal 123",
          "city": "Bogotá",
          "country": "CO",
          "postal": "110111",
          "location": {
            "type": "Point",
            "coordinates": [-74.0721, 4.7110]
          }
        },
        {
          "type": "warehouse",
          "line1": "Zona Franca 4",
          "city": "Medellín",
          "country": "CO",
          "postal": "050001",
          "location": {
            "type": "Point",
            "coordinates": [-75.5636, 6.2442]
          }
        }
      ],
      "settings": {
        "featureFlags": {
          "payments": true,
          "beta_ml_routing": false,
          "enable_geo_fallback": true
        },
        "regionalPreferences": {
          "defaultLocale": "es-CO",
          "supportedLocales": ["es-CO", "es-ES", "en-US"],
          "timezone": "America/Bogota"
        }
      }
    }
  ],
  "users": [
    {
      "userId": "usr_1001",
      "username": "alexi.duran",
      "profile": {
        "fullName": "Alexi Duran",
        "email": "alexi.duran@example.org",
        "phone": "+57-300-1234567",
        "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
      },
      "roles": ["admin", "data:read", "data:write"],
      "preferences": {
        "ui": {
          "theme": "dark",
          "itemsPerPage": 25,
          "compactView": false
        },
        "notifications": {
          "email": { "enabled": true, "digest": "daily" },
          "sms": { "enabled": false },
          "push": { "enabled": true, "silentHours": ["23:00-07:00"] }
        },
        "localization": {
          "locale": "es-CO",
          "numberFormat": "1.234.567,89",
          "dateFormat": "DD/MM/YYYY"
        }
      },
      "createdAt": "2024-11-03T08:12:34Z",
      "status": "active",
      "meta": {
        "lastLogin": "2025-09-27T21:44:10-05:00",
        "loginCount": 1274,
        "passwordHash": "argon2id$v=19$m=65536,t=3,p=4$...base64..."
      }
    },
    {
      "userId": "usr_1002",
      "username": "jane.smith",
      "profile": {
        "fullName": "Jane Smith",
        "email": "jane.smith@partner.example.com",
        "phone": null,
        "bio": "Partnering manager — handles EMEA and LATAM accounts.",
        "languages": ["en", "es"]
      },
      "roles": ["partner", "reports:read"],
      "preferences": {},
      "createdAt": "2020-02-14T09:00:00Z",
      "status": "suspended",
      "suspension": {
        "reason": "policy-violation",
        "since": "2025-01-15T00:00:00Z",
        "reviewTicket": "TCK-998172"
      }
    }
  ],
  "catalog": {
    "products": [
      {
        "productId": "prd_A-100",
        "sku": "A-100",
        "title": {
          "es-CO": "Horno Industrial Modelo A",
          "en-US": "Industrial Oven Model A"
        },
        "descriptions": {
          "short": "Horno de alta eficiencia para panaderías.",
          "long": "Horno industrial con control PID, 4 bandejas, consumo optimizado y registro de operación en tiempo real."
        },
        "categories": ["equipamiento", "cocina"],
        "pricing": {
          "currency": "COP",
          "list": "15000000",
          "discounts": [
            { "type": "bulk", "minQty": 3, "price": "14000000" },
            { "type": "seasonal", "code": "WINTER2025", "price": "13500000" }
          ],
          "taxInclusive": false
        },
        "inventory": {
          "total": 12,
          "warehouses": [
            { "whId": "wh_01", "qty": 8 },
            { "whId": "wh_02", "qty": 4 }
          ],
          "reorderThreshold": 5
        },
        "specs": {
          "powerKw": 12.5,
          "dimensions": { "w_mm": 1200, "h_mm": 900, "d_mm": 800 },
          "weightKg": 210.5,
          "materials": ["stainless_steel_304", "ceramic_insulation"]
        }
      },
      {
        "productId": "prd_B-201",
        "sku": "B-201",
        "title": { "es-CO": "Mezcladora Industrial", "en-US": "Industrial Mixer" },
        "categories": ["equipamiento"],
        "pricing": { "currency": "USD", "list": "4500.00", "taxInclusive": true },
        "inventory": { "total": 0, "reorderThreshold": 2, "backorderAllowed": true }
      }
    ],
    "bundles": [
      {
        "bundleId": "bundle_startup_01",
        "name": "Pack Panadería Inicial",
        "items": [
          { "productId": "prd_A-100", "qty": 1 },
          { "productId": "prd_B-201", "qty": 1 }
        ],
        "bundlePrice": { "currency": "COP", "amount": "17000000" },
        "validUntil": "2026-03-31"
      }
    ]
  },
  "transactions": { ... },
  "geo": { ... },
  "audit": { ... },
  "ml": { ... },
  "i18n": { ... },
  "graph": { ... },
  "schemas": { ... },
  "diagnostics": { ... },
  "notes": [
    "Este JSON es de ejemplo y contiene valores ficticios.",
    "Nótese que números muy grandes (p. ej. balances contables) se guardan como strings para evitar pérdida de precisión en parsers que no soportan BigInt."
  ]
}
)
