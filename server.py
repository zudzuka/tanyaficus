import http.server
import socketserver
import os
import re

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Check if the path ends with a file extension
        if '.' in self.path:
            return http.server.SimpleHTTPRequestHandler.do_GET(self)

        # Look for a file with the requested name and the .html extension
        html_path = self.translate_path(self.path + '.html')
        if os.path.exists(html_path):
            self.path = self.path + '.html'

        # Serve the file requested by the client
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()