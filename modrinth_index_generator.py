import urllib.request
import json
import gzip
from io import BytesIO

ver = input("Please input the Modrinth version code: ")

req = urllib.request.Request(
    f"https://api.modrinth.com/v2/version/{ver}",
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept-Encoding': 'gzip',
    }
)

try:
    with urllib.request.urlopen(req) as response:
        with gzip.GzipFile(fileobj=BytesIO(response.read())) as uncompressed:
            data = json.loads(uncompressed.read().decode('utf-8'))

    file_info = data['files'][0]
    filename = file_info['filename']
    download_url = file_info['url']
    sha1 = file_info['hashes']['sha1']
    sha512 = file_info['hashes']['sha512']
    size = file_info['size']

    # Fill the JSON template
    result = {
        "downloads": [download_url],
        "env": {
            "client": "required",
            "server": "unsupported"
        },
        "fileSize": size,
        "hashes": {
            "sha1": sha1,
            "sha512": sha512
        },
        "path": f"<path>/{filename}"
    }
    
    print("")
    print("Below is the modrinth.index.json entry:")
    print("")
    print(json.dumps(result, indent=2))
    print("")

except Exception as e:
    print(f"Error: {e}")

input("Press any key to quit ")   