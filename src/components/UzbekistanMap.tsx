import React, { useState } from 'react';
import { sound } from '../utils/soundEffects.ts';

interface MapRegion {
  id: string;
  name: string;
  capital: string;
  role: string;
  mineralOrIndustry: string;
  sourceLesson: string;
  x: number;
  y: number;
}

const REGIONS: MapRegion[] = [
  { id: 'tashkent', name: 'Toshkent viloyati', capital: 'Nurafshon (poytaxt: Toshkent)', role: 'Respublikaning eng yirik industrial megapolisi va energetika markazi', mineralOrIndustry: 'Angren ko‘miri, Olmaliq misi, Chirchiq kimyosi, Bekobod metallurgiyasi', sourceLesson: '39, 40, 41-darslar', x: 740, y: 190 },
  { id: 'samarkand', name: 'Samarqand viloyati', capital: 'Samarqand shahri', role: 'Qadimiy sivilizatsiya va zamonaviy mashinasozlik (SamAvto), turizm markazi', mineralOrIndustry: 'Kattaqo‘rg‘on suv ombori, Zarmitan oltini, Ingichka volframi', sourceLesson: '50-dars', x: 590, y: 310 },
  { id: 'buxoro', name: 'Buxoro viloyati', capital: 'Buxoro shahri', role: 'Gaz-neft sanoati, qadimiy arxitektura va zardo‘zlik hunarmandchiligi', mineralOrIndustry: 'Gazli gazi, Qorovulbozor neftni qayta ishlash zavodi', sourceLesson: '52-dars', x: 470, y: 320 },
  { id: 'navoiy', name: 'Navoiy viloyati', capital: 'Navoiy shahri', role: 'Eng katta maydonga ega viloyat, oltin va tog‘-kon metallurgiyasi markazi', mineralOrIndustry: 'Muruntov oltin koni, Navoiy IES, Navoiyazot, Navoiy sementi', sourceLesson: '51-dars', x: 500, y: 220 },
  { id: 'andijon', name: 'Andijon viloyati', capital: 'Andijon shahri', role: 'Avtomobilsozlik poytaxti, yuqori aholi zichligi va obikor dehqonchilik', mineralOrIndustry: 'Asaka avtomobil zavodi, irrigatsiya mashinasozligi', sourceLesson: '46-dars', x: 865, y: 200 },
  { id: 'fargona', name: 'Farg‘ona viloyati', capital: 'Farg‘ona shahri', role: 'Kimyo, neftni qayta ishlash, ipakchilik va chinni ishlab chiqarish', mineralOrIndustry: 'Sho‘rsuv oltingugurti, Marg‘ilon shoyisi, Quvasoy sementi', sourceLesson: '47-dars', x: 830, y: 245 },
  { id: 'namangan', name: 'Namangan viloyati', capital: 'Namangan shahri', role: 'Gullar shahri, yengil sanoat, pichoqchilik va bog‘dorchilik', mineralOrIndustry: 'Mingbuloq nefti, Chust pichoqlari, to‘qimachilik', sourceLesson: '48-dars', x: 820, y: 165 },
  { id: 'qashqadaryo', name: 'Qashqadaryo viloyati', capital: 'Qarshi shahri', role: 'Respublika gaz va yoqilg‘i sanoatining tayanchi, g‘alla va paxta yetakchisi', mineralOrIndustry: 'Sho‘rtangaz majmuasi, Muborak gazni qayta ishlash, Talimarjon IES', sourceLesson: '54-dars', x: 580, y: 410 },
  { id: 'surxondaryo', name: 'Surxondaryo viloyati', capital: 'Termiz shahri', role: 'Eng janubiy subtropik o‘lka, qadimiy Amudaryo porti va qorako‘lchilik', mineralOrIndustry: 'Sharg‘un toshko‘miri, Xonjiza polimetall koni, Surxon suri', sourceLesson: '55-dars', x: 670, y: 500 },
  { id: 'sirdaryo', name: 'Sirdaryo viloyati', capital: 'Guliston shahri', role: 'Mirzacho‘l paxtachiligi va mamlakatning ulkan energetika markazi', mineralOrIndustry: 'Sirdaryo IES (13 mlrd kW·h), paxta tozalash zavodlari', sourceLesson: '43-dars', x: 700, y: 250 },
  { id: 'jizzax', name: 'Jizzax viloyati', capital: 'Jizzax shahri', role: 'G‘allachilik, Zomin tog‘-o‘rmon kurorti va erkin iqtisodiy zona', mineralOrIndustry: 'Jizzax oyna zavodi, akkumulyator zavodi, Marjonbuloq oltini', sourceLesson: '44-dars', x: 640, y: 270 },
  { id: 'xorazm', name: 'Xorazm viloyati', capital: 'Urganch shahri', role: 'Qadimiy Xiva sivilizatsiyasi, sholikorlik, qovunchilik va gilam to‘qish', mineralOrIndustry: 'GM Uzbekistan Pitnak filiali, Xiva hunarmandchiligi', sourceLesson: '57-dars', x: 310, y: 255 },
  { id: 'qoraqalpogiston', name: 'Qoraqalpog‘iston Respublikasi', capital: 'Nukus shahri', role: 'Ustyurt platosi, Orol dengizi havzasi, kimyo va sholikorlik', mineralOrIndustry: 'Qo‘ng‘irot soda zavodi, Ustyurt gaz-kimyo majmuasi, Taxiatosh IES', sourceLesson: '58-dars', x: 190, y: 150 }
];

export const UzbekistanMap: React.FC = () => {
  const [selected, setSelected] = useState<MapRegion>(REGIONS[0]);

  const handleSelect = (r: MapRegion) => {
    sound.playSelect();
    setSelected(r);
  };

  return (
    <div className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <span>O‘ZBEKISTON IQTISODIY VA TABIIY XARITASI</span>
            <span>·</span>
            <span>8-SINF</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Iqtisodiy tugunlar va mintaqalar ko‘rinishi
          </h3>
        </div>
        <div className="text-xs text-slate-400">
          Nuqtani tanlang va tegishli viloyat ma’lumotini ko‘ring
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* SVG Interactive Map */}
        <div className="lg:col-span-8 relative bg-[#040d1a] border border-cyan-950/60 rounded-xl overflow-hidden p-4">
          {/* Topographic contour lines decoration */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0ea5e9" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <svg viewBox="0 0 960 560" className="w-full h-auto drop-shadow-2xl">
            {/* Outline shape representing Uzbekistan territory */}
            <path
              d="M 60,110 
                 L 140,80 230,60 310,70 380,120 440,160 520,180 570,180 620,160 670,170 730,130 790,140 850,150 900,190 920,230 870,260 830,280 770,260 720,280 690,340 680,410 700,480 670,530 630,520 620,440 560,420 520,380 470,360 410,340 360,330 310,310 270,290 250,230 200,200 130,220 80,180 Z"
              fill="#081e3a"
              stroke="#0ea5e9"
              strokeWidth="2"
              className="transition-colors duration-300"
            />

            {/* Orol dengizi (havzasi) */}
            <ellipse cx="230" cy="85" rx="35" ry="25" fill="#0369a1" fillOpacity="0.3" stroke="#0284c7" strokeWidth="1" strokeDasharray="3 2" />
            <text x="210" y="88" fill="#38bdf8" fontSize="10" fontFamily="sans-serif" opacity="0.7">Orol havzasi</text>

            {/* Amudaryo va Sirdaryo daryo o‘zanlari */}
            <path d="M 650,520 Q 560,420 480,350 T 320,270 T 210,140" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeOpacity="0.6" />
            <path d="M 880,180 Q 750,220 700,240 T 630,170" fill="none" stroke="#0284c7" strokeWidth="2" strokeOpacity="0.5" />

            {/* Region Pins */}
            {REGIONS.map((r) => {
              const isSelected = selected.id === r.id;
              return (
                <g
                  key={r.id}
                  onClick={() => handleSelect(r)}
                  className="cursor-pointer group"
                >
                  {/* Ping circle if selected */}
                  {isSelected && (
                    <circle cx={r.x} cy={r.y} r="14" fill="#22d3ee" className="animate-ping" opacity="0.4" />
                  )}
                  {/* Outer circle */}
                  <circle
                    cx={r.x}
                    cy={r.y}
                    r={isSelected ? "9" : "6"}
                    fill={isSelected ? "#06b6d4" : "#1e293b"}
                    stroke={isSelected ? "#ffffff" : "#38bdf8"}
                    strokeWidth={isSelected ? "2.5" : "1.5"}
                    className="transition-all duration-200 group-hover:scale-125"
                  />
                  {/* Inner dot */}
                  <circle
                    cx={r.x}
                    cy={r.y}
                    r={isSelected ? "3.5" : "2"}
                    fill={isSelected ? "#0f172a" : "#38bdf8"}
                  />
                  {/* Region text label */}
                  <text
                    x={r.x}
                    y={r.y - 12}
                    textAnchor="middle"
                    fill={isSelected ? "#38bdf8" : "#94a3b8"}
                    fontSize={isSelected ? "12" : "10"}
                    fontWeight={isSelected ? "700" : "500"}
                    className="select-none pointer-events-none transition-colors duration-200"
                  >
                    {r.name.replace(" viloyati", "").replace(" Respublikasi", "")}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Region Card Inspector */}
        <div className="lg:col-span-4 bg-slate-800/60 border border-slate-700/80 rounded-xl p-5 text-left flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-3 text-xs text-cyan-400 font-mono">
              <span>{selected.sourceLesson}</span>
              <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/40 text-[11px]">Faol hudud</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-1">
              {selected.name}
            </h4>
            <p className="text-xs text-slate-300 font-medium mb-4">
              Markazi: <span className="text-white">{selected.capital}</span>
            </p>

            <div className="space-y-3 text-xs leading-relaxed text-slate-300">
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="block text-slate-400 font-mono text-[11px] mb-1">IQTISODIY-IJTIMOIY ROʻLI:</span>
                <span className="text-slate-200">{selected.role}</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="block text-cyan-400 font-mono text-[11px] mb-1">BOYLIKLARI VA KORXONALARI:</span>
                <span className="text-slate-200">{selected.mineralOrIndustry}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
            <span>Darslik sahifalari bo‘yicha</span>
            <span className="font-mono text-cyan-300">8-sinf geogr.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
