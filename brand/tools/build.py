import math, os, sys
OUT = sys.argv[1]
INK, PAPER = "#111111", "#F2F1EF"
CORAL, VIOLET, LIME, CYAN = "#FF6A3D", "#9C8CFF", "#CFF35E", "#8FD3DD"

# ---------- marks (200x200 artboard) ----------
def warp(fg, uid="warp"):
    """Woven T: two warp threads (bars) + one weft woven over the left, under the right."""
    ww, wh, gap = 32, 36, 9
    wl, wr, wy, top, bot = 79, 121, 66, 20, 180
    return f'''<defs>
  <mask id="{uid}-l" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200"><rect width="200" height="200" fill="#fff"/><line x1="34" y1="{wy}" x2="166" y2="{wy}" stroke="#000" stroke-width="{wh+2*gap}" stroke-linecap="round"/></mask>
  <mask id="{uid}-w" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200"><rect width="200" height="200" fill="#fff"/><line x1="{wr}" y1="{top}" x2="{wr}" y2="{bot}" stroke="#000" stroke-width="{ww+2*gap}" stroke-linecap="round"/></mask>
</defs>
<g stroke="{fg}" stroke-linecap="round" fill="none">
  <line mask="url(#{uid}-l)" x1="{wl}" y1="{top}" x2="{wl}" y2="{bot}" stroke-width="{ww}"/>
  <line mask="url(#{uid}-w)" x1="34" y1="{wy}" x2="166" y2="{wy}" stroke-width="{wh}"/>
  <line x1="{wr}" y1="{top}" x2="{wr}" y2="{bot}" stroke-width="{ww}"/>
</g>'''

def pill(x0, y0, x1, y1):
    w, h = x1-x0, y1-y0
    return f'<rect x="{x0:g}" y="{y0:g}" width="{w:g}" height="{h:g}" rx="{min(w,h)/2:g}"/>'

def weft(fg, core=None, uid=None):
    """Pinwheel basket weave: four thread pills woven around a centre dot."""
    w, c, gap, dot = 52, 78, 12, 26
    h, g, cx = c/2, gap/2, 100
    p = [pill(cx-h-w+g, cx-h-w+g, cx+h-g,   cx-h-g),     # top
         pill(cx+h+g,   cx-h-w+g, cx+h+w-g, cx+h-g),     # right
         pill(cx-h+g,   cx+h+g,   cx+h+w-g, cx+h+w-g),   # bottom
         pill(cx-h-w+g, cx-h+g,   cx-h-g,   cx+h+w-g)]   # left
    return f'<g fill="{fg}">{"".join(p)}</g><circle cx="{cx}" cy="{cx}" r="{dot}" fill="{core or fg}"/>'


def needle(fg, uid="needle"):
    """Needle T: the needle is the stem, the thread runs through its eye as the crossbar and its loose tail hangs off."""
    cx, w, top, shaft_end, tip = 100, 36, 14, 136, 190
    r = w / 2
    n = (f"M{cx-r} {top+r}A{r} {r} 0 0 1 {cx+r} {top+r}V{shaft_end}"
         f"L{cx+2.5} {tip-5}Q{cx} {tip+1} {cx-2.5} {tip-5}L{cx-r} {shaft_end}Z")
    eye = '<rect x="94" y="34" width="12" height="60" rx="6"'
    thread = f'<path d="M30 64H140A26 26 0 0 1 166 90V118" fill="none" stroke="{fg}" stroke-width="24" stroke-linecap="round"/>'
    return f'''<defs>
  <mask id="{uid}-t" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200"><rect width="200" height="200" fill="#fff"/><path d="{n}" stroke="#000" stroke-width="16" stroke-linejoin="round"/></mask>
  <mask id="{uid}-n" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200"><rect width="200" height="200" fill="#fff"/>{eye} fill="#000"/></mask>
  <clipPath id="{uid}-e">{eye}/></clipPath>
</defs>
<g mask="url(#{uid}-t)">{thread}</g>
<path d="{n}" fill="{fg}" mask="url(#{uid}-n)"/>
<g clip-path="url(#{uid}-e)">{thread}</g>'''


def sail(fg, uid=None, dots=None):
    """Vela: a mast and a mainsail of six dots (3-2-1)."""
    r, p, x0, y0 = 16, 42, 76, 58
    d = "".join(f'<circle cx="{x0 + col*p}" cy="{y0 + row*p}" r="{r}"/>' for row in range(3) for col in range(row + 1))
    return f'<rect x="24" y="22" width="26" height="160" rx="13" fill="{fg}"/><g fill="{dots or fg}">{d}</g>'

# ---------- wordmarks (monoline geometric, x-height 100, stroke 26, round terminals) ----------
def _e(x):
    a = math.radians(62)
    return f"M{x-37} 50H{x+37}A37 37 0 1 0 {x + 37*math.cos(a):.2f} {50 + 37*math.sin(a):.2f} "
def _l(x): return f"M{x} -37V87 "
def _a(x): return f"M{x+37} 50A37 37 0 1 0 {x-37} 50A37 37 0 1 0 {x+37} 50 M{x+37} 13V87 "
def _t(x): return f"M{x} -32V87 M{x-22} 13H{x+26} "
def _r(x): return f"M{x} 87V50A37 37 0 0 1 {x+37} 13H{x+42}"
def _v(x): return f"M{x-38} 13L{x} 87L{x+38} 13 "
WORDS = {  # path, width
    "telar": (_t(35) + _e(136) + _l(215) + _a(294) + _r(373), 428),
    "vela":  (_v(51) + _e(158) + _l(237) + _a(316), 366),
}
def wordmark(fg, name="telar"):
    d, _ = WORDS[name]
    return f'<path d="{d}" fill="none" stroke="{fg}" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>'
WM_TOP, WM_H = -50, 150   # wordmark bbox (ascender to baseline)

def svg(w, h, body, bg=None, vb=None):
    vb = vb or f"0 0 {w} {h}"
    b = f'<rect width="100%" height="100%" fill="{bg}"/>' if bg else ''
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" width="{w}" height="{h}">{b}{body}</svg>\n'

BBOX = {"warp": (16, 4, 184, 196), "weft": (15, 15, 185, 185), "needle": (18, 14, 178, 190), "sail": (24, 22, 176, 182)}  # mark content bounds in its 200 artboard

def lockup(mark_fn, mark_fg, word_fg, uid, word="telar", **kw):
    # mark content scaled to the wordmark's ascender-to-baseline height (150), with a hair of optical overshoot
    x0, y0, x1, y1 = BBOX[uid]
    s = 154 / (y1 - y0)
    mw = (x1 - x0) * s
    mark = f'<g transform="translate({-x0*s:.2f} {75 - (y0 + y1)/2*s:.2f}) scale({s:.4f})">{mark_fn(mark_fg, uid=uid, **kw)}</g>'
    gap = 46
    wg = f'<g transform="translate({mw + gap:.2f} 50)">{wordmark(word_fg, word)}</g>'
    return mark + wg, round(mw + gap + WORDS[word][1]), 150

def appicon(mark_fn, tile, fg, uid, **kw):
    body = f'<rect width="1024" height="1024" rx="230" fill="{tile}"/><g transform="translate(212 212) scale(3)">{mark_fn(fg, uid=uid, **kw)}</g>'
    return svg(1024, 1024, body)

os.makedirs(f"{OUT}/svg", exist_ok=True)
files = {
  "telar-warp-mark.svg":          svg(200, 200, warp(INK, "warp")),
  "telar-warp-mark-light.svg":    svg(200, 200, warp(PAPER, "warp")),
  "telar-weft-mark.svg":          svg(200, 200, weft(INK, VIOLET)),
  "telar-weft-mark-light.svg":    svg(200, 200, weft(PAPER, VIOLET)),
  "telar-wordmark.svg":           svg(WORDS["telar"][1], WM_H, wordmark(INK, "telar"), vb=f"0 {WM_TOP} {WORDS['telar'][1]} {WM_H}"),
  "vela-wordmark.svg":            svg(WORDS["vela"][1], WM_H, wordmark(INK, "vela"), vb=f"0 {WM_TOP} {WORDS['vela'][1]} {WM_H}"),
  "vela-sail-mark.svg":           svg(200, 200, sail(INK)),
  "vela-sail-mark-light.svg":     svg(200, 200, sail(PAPER, dots=CYAN)),
  "vela-sail-appicon.svg":        appicon(sail, CYAN, INK, "sail"),
  "telar-warp-appicon.svg":       appicon(warp, CORAL, INK, "warp"),
  "telar-needle-mark.svg":        svg(200, 200, needle(INK)),
  "telar-needle-mark-light.svg":  svg(200, 200, needle(PAPER)),
  "telar-needle-appicon.svg":     appicon(needle, LIME, INK, "needle"),
  "telar-weft-appicon.svg":       appicon(weft, VIOLET, INK, None, core=PAPER),
}
for name, (fn, mfg, wfg, kw) in {
  "telar-warp-lockup.svg":       (warp, INK, INK, {}),
  "telar-warp-lockup-light.svg": (warp, CORAL, PAPER, {}),
  "telar-weft-lockup.svg":       (weft, INK, INK, {"core": VIOLET}),
  "telar-weft-lockup-light.svg": (weft, PAPER, PAPER, {"core": VIOLET}),
  "telar-needle-lockup.svg":       (needle, INK, INK, {}),
  "telar-needle-lockup-light.svg": (needle, LIME, PAPER, {}),
  "vela-sail-lockup.svg":          (sail, INK, INK, {"word": "vela"}),
  "vela-sail-lockup-light.svg":    (sail, PAPER, PAPER, {"word": "vela", "dots": CYAN}),
}.items():
    body, W, H = lockup(fn, mfg, wfg, name.split('-')[1], **kw)
    files[name] = svg(W, H + 8, body, vb=f"0 -4 {W} {H + 8}")
for n, c in files.items():
    open(f"{OUT}/svg/{n}", "w").write(c)
print("\n".join(sorted(files)))
