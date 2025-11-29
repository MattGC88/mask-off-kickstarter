# 📧 Shopify Email Setup Guide

## ✅ Tu Newsletter Ya Está Lista

El componente Newsletter ya está configurado para funcionar automáticamente con Shopify Email cuando subas el sitio a tu tienda.

---

## 🚀 Pasos para Activar Shopify Email

### 1. **Instalar la App Shopify Email** (GRATIS)

1. Ve a tu admin de Shopify
2. Click en **Apps** → **Shopify App Store**
3. Busca "**Shopify Email**"
4. Click en **Install**
5. ¡Listo! Ya tienes 10,000 emails gratis al mes

### 2. **Cómo Funciona el Newsletter**

Cuando un usuario se suscribe desde tu landing page:
- El email se guarda automáticamente como **Customer** en Shopify
- Se etiqueta como `newsletter` para que puedas segmentar
- Aparece en tu lista de contactos: **Customers** → filtrar por tag `newsletter`

### 3. **Enviar tu Primer Newsletter**

Desde Shopify Admin:

1. Ve a **Marketing** → **Campaigns**
2. Click en **Create campaign** → **Shopify Email**
3. Elige una plantilla o crea desde cero
4. En **Recipients**, selecciona:
   - Customers tagged with `newsletter`
5. Escribe tu email
6. Click **Send** o **Schedule**

---

## 📊 Gestionar Suscriptores

### Ver Suscriptores:
1. **Shopify Admin** → **Customers**
2. Filtrar por tag: `newsletter`
3. Aquí verás todos los emails capturados

### Crear Segmentos:
1. **Customers** → **Segments** → **Create segment**
2. Agrega condición: `Customer tag = newsletter`
3. Guarda el segmento para usarlo en campañas

---

## 💡 Tips para Shopify Email

### Límites Gratuitos:
- ✅ **10,000 emails/mes** GRATIS
- ✅ Emails de carritos abandonados: GRATIS (ilimitados)
- 💵 Después: $1 por cada 1,000 emails extra

### Mejores Prácticas:
1. **Envía contenido de valor**: Updates del proyecto, behind-the-scenes, etc.
2. **Frecuencia**: 1-2 emails por semana máximo
3. **Personaliza**: Usa el nombre del cliente con `{{ customer.first_name }}`
4. **Subject Lines**: Cortos y atractivos (40-50 caracteres)
5. **Call to Action**: Un objetivo claro por email

### Templates Recomendados:
- **Bienvenida**: Envía cuando alguien se suscribe
- **Updates del Kickstarter**: Progreso, nuevas metas
- **Behind-the-Scenes**: Proceso de diseño, historias
- **Urgencia**: "Últimas 48 horas de campaña"

---

## 🔧 Configuración Avanzada (Opcional)

### Automatización de Email de Bienvenida:

1. **Marketing** → **Automations** → **Create automation**
2. Selecciona **Custom automation**
3. Trigger: "Customer added tag 'newsletter'"
4. Action: "Send email"
5. Diseña tu email de bienvenida
6. Activa la automatización

### Personalizar el Mensaje de Confirmación:

1. **Settings** → **Notifications**
2. Busca "Customer account welcome"
3. Personaliza el template

---

## 📈 Métricas a Monitorear

En **Marketing** → **Campaigns**, revisa:
- **Open Rate** (promedio: 15-25%)
- **Click Rate** (promedio: 2-5%)
- **Unsubscribes** (mantener bajo 1%)
- **Revenue generated** (si aplica)

---

## 🎯 Alternativa: Usar Formulario Nativo de Shopify

Si prefieres usar el formulario nativo de Shopify en lugar del componente custom:

### Opción A: Form Nativo en Theme
```liquid
<div class="newsletter-form">
  {% form 'customer', class: 'contact-form' %}
    <input type="hidden" name="contact[tags]" value="newsletter">
    <input
      type="email"
      name="contact[email]"
      placeholder="Enter your email"
      required
    >
    <button type="submit">Subscribe</button>
  {% endform %}
</div>
```

### Opción B: Shopify Email Popup App
1. Instala **Shopify Email**
2. Configura un popup de newsletter
3. Se mostrará automáticamente en tu tienda

---

## ❓ FAQ

**Q: ¿Los emails se agregan automáticamente?**
A: Sí, cuando alguien llena el formulario en tu landing page.

**Q: ¿Puedo importar una lista existente?**
A: Sí, en **Customers** → **Import** sube un CSV con columna `tags: newsletter`

**Q: ¿Necesito configurar algo más?**
A: No, el componente ya está listo. Solo sube tu sitio a Shopify y funciona.

**Q: ¿Cómo evito SPAM?**
A: Shopify maneja esto automáticamente. Incluye botón de unsubscribe en cada email.

---

## 📞 Soporte

- [Shopify Email Docs](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-email)
- [Video Tutorial](https://www.youtube.com/results?search_query=shopify+email+tutorial)

---

**¡Tu newsletter está lista para funcionar! 🎉**
