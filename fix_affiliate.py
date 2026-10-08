import os, re, io

site = r"C:\Users\henri\money\site"
replacements = [
    (r'https://www\.synthesia\.io/\?via=henrique-costa', '/go/synthesia.html'),
    (r'https://synthesia\.io/\?via=henrique-costa', '/go/synthesia.html'),
    (r'https://rytr\.me/\?via=henrique-costa', '/go/rytr.html'),
]

changed = []
for root, dirs, files in os.walk(site):
    dirs[:] = [d for d in dirs if d not in ['.git', 'go']]
    for fname in files:
        if not fname.endswith('.html'):
            continue
        path = os.path.join(root, fname)
        content = io.open(path, 'r', encoding='utf-8').read()
        new_content = content
        for pattern, replacement in replacements:
            new_content = re.sub(pattern, replacement, new_content)
        if new_content != content:
            io.open(path, 'w', encoding='utf-8').write(new_content)
            changed.append(path.replace(site, '').lstrip('\\'))

print("Updated " + str(len(changed)) + " files:")
for f in changed:
    print("  " + f)
