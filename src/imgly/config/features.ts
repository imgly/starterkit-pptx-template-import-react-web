/**
 * Feature Configuration - Enable/Disable Advanced Editor Capabilities
 *
 * This file configures which features are available in the advanced editor.
 * Features control the visibility and availability of UI elements and functionality.
 *
 * ## Feature System Overview
 *
 * - `cesdk.feature.enable(features)` - Enable features with default predicates
 * - `cesdk.feature.disable(features)` - Disable features completely
 * - `cesdk.feature.set(feature, predicate)` - Set custom predicate for conditional availability
 *
 * ## Glob Pattern Support
 *
 * Use glob patterns to enable/disable entire feature groups:
 * - `'ly.img.text.*'` - All text features
 * - `'ly.img.crop.*'` - All crop features
 * - `'ly.img.video.*'` - All video features
 * - `'ly.img.placeholder.*'` - All placeholder features
 *
 * @see https://img.ly/docs/cesdk/js/user-interface/customization/disable-or-enable-f058e2/
 */

import type CreativeEditorSDK from '@cesdk/cesdk-js';

/**
 * Configure which features are enabled in the advanced editor.
 *
 * Enables all professional editing features for power users.
 * Features are organized by category for easy customization.
 *
 * @param cesdk - The CreativeEditorSDK instance to configure
 */
export function setupFeatures(cesdk: CreativeEditorSDK): void {
  cesdk.feature.enable([
    // ============================================================================
    // NAVIGATION FEATURES
    // Configure the top navigation bar visibility and controls
    // ============================================================================

    // #region Navigation Features
    'ly.img.navigation' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // TEXT FEATURES
    // Configure text editing capabilities for professional typography
    // ============================================================================

    // #region Text Features
    'ly.img.text' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // CROP FEATURES
    // Configure image and block cropping capabilities
    // ============================================================================

    // #region Crop Features
    'ly.img.crop' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // TRANSFORM FEATURES
    // Configure block position, size, and rotation controls
    // ============================================================================

    // #region Transform Features
    'ly.img.transform' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // EFFECTS FEATURES
    // Configure visual effects and adjustments for professional photo editing
    // ============================================================================

    // #region Effects Features
    'ly.img.filter' /* Filter button */,
    'ly.img.adjustment' /* Adjustments button (brightness, contrast, saturation, etc.) */,
    'ly.img.effect' /* Effect button */,
    'ly.img.blur' /* Blur button */,
    'ly.img.shadow' /* Shadow button */,
    'ly.img.cutout' /* Cutout controls for background removal */,
    // #endregion

    // ============================================================================
    // CANVAS FEATURES
    // Configure the canvas area and context menu
    // ============================================================================

    // #region Canvas Features
    'ly.img.canvas' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // INSPECTOR FEATURES
    // Configure the inspector panel and toolbar
    // ============================================================================

    // #region Inspector Features
    'ly.img.inspector' /* Inspector visibility */,
    'ly.img.inspector.toggle' /* Inspector Toggle button */,
    // #endregion

    // ============================================================================
    // GENERAL EDITING FEATURES
    // Configure common editing operations
    // ============================================================================

    // #region General Editing Features
    'ly.img.delete' /* Delete button and keyboard shortcut */,
    'ly.img.duplicate' /* Duplicate button and copy/paste */,
    'ly.img.group' /* Group and Ungroup buttons */,
    'ly.img.replace' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // PAGE FEATURES
    // Configure multi-page functionality
    // ============================================================================

    // #region Page Features
    'ly.img.page' /* Enables all children below */,
    'ly.img.scene.layout' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // STYLING FEATURES
    // Configure block appearance options
    // ============================================================================

    // #region Styling Features
    // 'ly.img.fill' /* Fill button and Fill Panel */,  // Use specific children instead
    'ly.img.fill.color' /* Solid and gradient fill controls */,
    'ly.img.fill.image' /* Image fill controls and crop */,
    // 'ly.img.fill.video', /* Video fill - DISABLED for design editors */
    'ly.img.stroke' /* Stroke controls (Color, Width) */,
    'ly.img.opacity' /* Opacity controls */,
    'ly.img.blendMode' /* Blend mode controls */,
    'ly.img.shape.options' /* Shape Options dropdown */,
    'ly.img.shape.edit' /* Edit Path button in Shape Options */,
    'ly.img.vectorEdit' /* Vector edit controls (parent) */,
    'ly.img.vectorEdit.moveMode' /* Move/select mode toggle */,
    'ly.img.vectorEdit.addMode' /* Add node mode toggle */,
    'ly.img.vectorEdit.deleteMode' /* Delete node mode toggle */,
    'ly.img.vectorEdit.bendMode' /* Bend mode toggle */,
    'ly.img.vectorEdit.mirrorMode' /* Handle mirror mode dropdown */,
    'ly.img.vectorEdit.done' /* Exit vector edit button */,
    'ly.img.combine' /* Combine dropdown (shapes/cutouts) */,
    'ly.img.position' /* Position dropdown (layer ordering) */,
    'ly.img.trim' /* Trim button (video mode) */,
    // #endregion

    // ============================================================================
    // PLACEHOLDER FEATURES
    // Template placeholder functionality for creating editable templates
    // ============================================================================

    // #region Placeholder Features
    'ly.img.placeholder' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // NOTIFICATION FEATURES
    // Configure user feedback notifications
    // ============================================================================

    // #region Notification Features
    'ly.img.notifications' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // DOCK AND LIBRARY FEATURES
    // Configure the asset dock and library panels
    // ============================================================================

    // #region Dock and Library Features
    'ly.img.dock' /* Dock visibility */,
    'ly.img.library.panel' /* Asset Library panel */,
    // #endregion

    // ============================================================================
    // GRID & RULERS
    // ============================================================================

    'ly.img.rulers' /* Grid overlay, snap-to-grid, and canvas rulers */
  ]);
}
