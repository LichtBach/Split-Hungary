import sys
OUT = sys.argv[1]
V = {
 "warp":  dict(no="01", name="WARP", accent="#FF6A3D", tag="two warp threads, one weft woven through — a T"),
 "weft":  dict(no="02", name="WEFT", accent="#9C8CFF", tag="four threads woven around one core"),
 "needle":dict(no="03", name="NEEDLE", accent="#CFF35E", tag="a needle and its thread, drawn as a T"),
 "sail":  dict(no="04", name="VELA", accent="#8FD3DD", tag="a mast and a mainsail of six dots", brand="vela"),
}
for k, v in V.items():
    a = v["accent"]; br = v.get("brand", "telar")
    tracks = [("video", [(0,36),(37.5,13),(52,32)], a), ("broll", [(6,14),(30,10),(60,18)], "#C9C8C4"),
              ("captions", [(1,24),(26.5,20),(56,26)], a), ("motion", [(10,12),(44,9),(70,14)], "#C9C8C4"),
              ("sfx", [(4,5),(22,4),(40,5),(63,4),(80,5)], a), ("music", [(0,86)], "#DAD9D5")]
    icons = {"video": '<rect x="1" y="5" width="13" height="10" rx="2"/><path d="M15 9l5-3v8l-5-3z"/>',
             "broll": '<rect x="2" y="3" width="16" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="8" cy="8" r="2"/><path d="M4 15l5-4 3 2 4-3v5z"/>',
             "captions": '<path d="M3 4h14v3h-5v11H8V7H3z"/>',
             "motion": '<path d="M10 1l2.2 6.8L19 10l-6.8 2.2L10 19l-2.2-6.8L1 10l6.8-2.2z"/>',
             "sfx": '<rect x="2" y="7" width="2" height="6" rx="1"/><rect x="6" y="4" width="2" height="12" rx="1"/><rect x="10" y="1" width="2" height="18" rx="1"/><rect x="14" y="5" width="2" height="10" rx="1"/><rect x="18" y="8" width="2" height="4" rx="1"/>',
             "music": '<path d="M7 3l10-2v12.5a3 3 0 1 1-2-2.8V5L9 6.3v9.2a3 3 0 1 1-2-2.8z"/>'}
    rows = "".join(f'''<div class="trk"><svg class="ic" viewBox="0 0 20 20" fill="currentColor">{icons[n]}</svg><div class="lane">{"".join(f'<i style="left:{x}%;width:{w}%;background:{c}"></i>' for x,w in clips)}</div></div>''' for n, clips, c in tracks)
    html = f'''<html><head><style>
*{{box-sizing:border-box}} body{{margin:0;width:1536px;height:1024px;background:#fff;display:grid;grid-template-columns:924px 594px;grid-template-rows:604px 400px;gap:18px 18px;padding:0}}
.p{{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden}}
.l{{background:#F2F1EF}} .d{{background:#111}}
.lab{{position:absolute;top:28px;left:30px;font:500 14px/1 ui-monospace,Menlo,monospace;letter-spacing:.18em;color:#111}}
.cap{{position:absolute;bottom:26px;left:30px;font:400 13px/1 ui-monospace,Menlo,monospace;letter-spacing:.06em;color:#8a8984}}
.bl{{grid-column:1/2;display:grid;grid-template-columns:714px 192px;gap:18px;background:#fff}}
.trk{{display:flex;align-items:center;gap:22px;height:34px;margin:8px 0}} .ic{{width:22px;height:22px;color:#8a8984;flex:none}}
.lane{{position:relative;flex:1;height:34px;background:#E8E7E3;border-radius:8px}} .lane i{{position:absolute;top:0;bottom:0;border-radius:8px}}
.ui{{width:100%;padding:56px 40px 0}} .ph{{position:absolute;top:70px;bottom:16px;left:calc(40px + 44px + 26%);width:3px;background:#111}}
.ph:before{{content:"";position:absolute;top:-9px;left:-6px;width:15px;height:15px;border-radius:50%;background:#111}}
</style></head><body>
<div class="p l"><span class="lab">{v["no"]} / {v["name"]}</span><img src="svg/{br}-{k}-lockup.svg" width="560"><span class="cap">{v["tag"]}</span></div>
<div class="p d"><img src="svg/{br}-{k}-mark-light.svg" width="330"></div>
<div class="p d" style="gap:64px"><img src="svg/{br}-{k}-appicon.svg" width="190"><img src="svg/{br}-{k}-lockup-light.svg" width="330"></div>
<div class="p l"><div class="ui">{rows}</div><div class="ph"></div><img src="svg/{br}-{k}-lockup.svg" width="120" style="position:absolute;top:22px;right:30px"></div>
</body></html>'''
    html = html.replace('.bl{', '.zz{')
    open(f"{OUT}/board-{k}.html", "w").write(html)
