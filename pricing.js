function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');
      const isOpen = sidebar.classList.contains('translate-x-0');

      if (isOpen) {
        sidebar.classList.replace('translate-x-0', 'translate-x-full');
        overlay.classList.add('hidden');
      } else {
        sidebar.classList.replace('translate-x-full', 'translate-x-0');
        overlay.classList.remove('hidden');
      }
    }

    // Ensure it's hidden on load
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('sidebar').classList.add('translate-x-full');
    });