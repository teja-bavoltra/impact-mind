const fs = require("fs");
const path = require("path");

const folders = [
  "public/assets",
  "public/icons",
  "public/logos",

  "src/app/(dashboard)",
  "src/app/(auth)",
  "src/app",

  "src/features/students/components",
  "src/features/students/hooks",
  "src/features/students/services",
  "src/features/students/types",

  "src/features/schools/components",
  "src/features/schools/hooks",
  "src/features/schools/services",
  "src/features/schools/types",

  "src/features/campaigns/components",
  "src/features/campaigns/hooks",
  "src/features/campaigns/services",
  "src/features/campaigns/types",

  "src/features/tutors/components",
  "src/features/tutors/hooks",
  "src/features/tutors/services",
  "src/features/tutors/types",

  "src/features/analytics/components",
  "src/features/analytics/hooks",
  "src/features/analytics/services",
  "src/features/analytics/types",

  "src/components/ui",
  "src/components/charts",
  "src/components/tables",
  "src/components/layout",

  "src/lib/api",
  "src/lib/auth",
  "src/lib/helpers",
  "src/lib/validators",
  "src/lib/constants",

  "src/hooks",

  "src/store",

  "src/graphql",

  "src/styles",

  "src/types",

  "src/config",

  ".github/workflows"
];

const files = {
  "src/app/layout.tsx": "",
  "src/app/globals.css": "",
  "src/app/(dashboard)/page.tsx": "",
  "src/app/(dashboard)/loading.tsx": "",

  "src/hooks/useDevice.ts": "",
  "src/hooks/useApi.ts": "",
  "src/hooks/useTheme.ts": "",

  "src/graphql/client.ts": "",
  "src/styles/globals.css": "",
  "src/styles/tailwind.css": "",
  "src/config/env.ts": "",
  "src/config/routes.ts": "",
  ".github/workflows/ci.yml": ""
};

function createFolders() {
  folders.forEach(folder => {
    const folderPath = path.join(process.cwd(), folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
      console.log("📁 Created:", folder);
    }
  });
}

function createFiles() {
  Object.entries(files).forEach(([filePath, content]) => {
    const fullPath = path.join(process.cwd(), filePath);
    if (!fs.existsSync(fullPath)) {
      fs.writeFileSync(fullPath, content);
      console.log("📄 Created:", filePath);
    }
  });
}

console.log("🚀 Generating enterprise folder structure...");
createFolders();
createFiles();
console.log("✅ Structure created successfully!");
