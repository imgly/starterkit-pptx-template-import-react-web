/**
 * CE.SDK PPTX Template Import Editor - Initialization Module
 *
 * This module provides the main entry point for initializing the PPTX template
 * import editor. Import and call `initPptxTemplateImportEditor()` to configure
 * a CE.SDK instance for editing imported PowerPoint (PPTX) templates.
 *
 * @see https://img.ly/docs/cesdk/js/features/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import {
  BlurAssetSource,
  ColorPaletteAssetSource,
  CropPresetsAssetSource,
  DemoAssetSources,
  EffectsAssetSource,
  FiltersAssetSource,
  PagePresetsAssetSource,
  StickerAssetSource,
  TextAssetSource,
  TextComponentAssetSource,
  TypefaceAssetSource,
  UploadAssetSources,
  VectorShapeAssetSource
} from '@cesdk/cesdk-js/plugins';

// Configuration plugin
import { PPTXTemplateImportConfig } from './config/plugin';

// Re-export for external use
export { PPTXTemplateImportConfig } from './config/plugin';

export interface PptxTemplateImportEditorOptions {
  onClose?: () => void;
}

/**
 * Initialize the CE.SDK PPTX Template Import Editor.
 *
 * This function configures a CE.SDK instance with:
 * - Design editor UI configuration
 * - Asset source plugins (templates, images, shapes, text, etc.)
 * - Actions dropdown in navigation bar
 *
 * @param cesdk - The CreativeEditorSDK instance to configure
 * @param options - Optional configuration including onClose callback
 */
export async function initPptxTemplateImportEditor(
  cesdk: CreativeEditorSDK,
  options: PptxTemplateImportEditorOptions = {}
) {
  const { onClose } = options;
  // ============================================================================
  // Configuration Plugin
  // ============================================================================

  // Add the PPTX template import configuration plugin
  // This sets up the UI, features, settings, and i18n for design editing
  await cesdk.addPlugin(new PPTXTemplateImportConfig());

  // ============================================================================
  // Editor Settings
  // ============================================================================

  cesdk.engine.editor.setSetting('page/title/show', false);

  // ============================================================================
  // Asset Source Plugins
  // ============================================================================

  // Asset source plugins provide built-in asset libraries

  // Blur presets for blur effects
  await cesdk.addPlugin(new BlurAssetSource());

  // Color palettes for design
  await cesdk.addPlugin(new ColorPaletteAssetSource());

  // Crop presets (aspect ratios)
  await cesdk.addPlugin(new CropPresetsAssetSource());

  // Local upload sources (images)
  await cesdk.addPlugin(
    new UploadAssetSources({
      include: ['ly.img.image.upload']
    })
  );

  // Demo assets (templates, images)
  await cesdk.addPlugin(
    new DemoAssetSources({
      include: ['ly.img.image.*']
    })
  );

  // Visual effects (adjustments, vignette, etc.)
  await cesdk.addPlugin(new EffectsAssetSource());

  // Photo filters (LUT, duotone)
  await cesdk.addPlugin(new FiltersAssetSource());

  // Page format presets (A4, Letter, social media sizes)
  await cesdk.addPlugin(new PagePresetsAssetSource());

  // Sticker assets
  await cesdk.addPlugin(new StickerAssetSource());

  // Text presets (headlines, body text styles)
  await cesdk.addPlugin(new TextAssetSource());

  // Text components (pre-designed text layouts)
  await cesdk.addPlugin(new TextComponentAssetSource());

  // Typeface/font assets
  await cesdk.addPlugin(new TypefaceAssetSource());

  // Vector shapes (rectangles, circles, arrows, etc.)
  await cesdk.addPlugin(new VectorShapeAssetSource());

  // ============================================================================
  // Back Button (onClose handler)
  // ============================================================================

  // Add back button to navigation bar if onClose callback is provided
  if (onClose) {
    cesdk.ui.insertOrderComponent(
      { in: 'ly.img.navigation.bar', position: 'start' },
      { id: 'ly.img.back.navigationBar', onClick: onClose }
    );
  }

  // ============================================================================
  // Navigation Bar Actions
  // ============================================================================

  // Configure the actions dropdown in the navigation bar
  cesdk.ui.insertOrderComponent(
    { in: 'ly.img.navigation.bar', position: 'end' },
    {
      id: 'ly.img.actions.navigationBar',
      children: [
        'ly.img.exportImage.navigationBar',
        'ly.img.exportPDF.navigationBar'
      ]
    }
  );

  // ============================================================================
  // Export Action
  // ============================================================================

  // Register export action for download
  cesdk.actions.register('exportDesign', async (exportOptions) => {
    const { blobs, options } = await cesdk.utils.export(exportOptions);
    await cesdk.utils.downloadFile(blobs[0], options.mimeType);
  });

  // ============================================================================
  // Upload Action
  // ============================================================================

  // Register upload action for local file uploads
  cesdk.actions.register('uploadFile', (file, onProgress, context) => {
    return cesdk.utils.localUpload(file, context);
  });
}
